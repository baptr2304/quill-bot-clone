<script setup lang='ts'>
import { useGetGenerativeModelGP } from '@/composables/useGetGenerativeModelGP.ts'

interface Dieukien {
  title: string
  uses_tag: string[]
  input_text: string
  paraphrased_text: string
}
const props = defineProps<{
  dieukien: Dieukien
}>()
const { dieukien } = toRefs(props)
function getTextParaphrased() {
  return dieukien.value.paraphrased_text.replace(/{/g, '<span style="color: red">').replace(/}/g, '</span>')
}
const question = ref('')
const placeholder = 'To rewrite text, enter or paste it here and press &quot;Paraphrase.&quot;'
const answer = ref('')
const isLoading = ref(false)
const sampleText = 'The sunset was wonderful'

function handleInput(event) {
  question.value = event.target.textContent
}

async function fetchAnswer() {
  isLoading.value = true
  answer.value = ''
  try {
    answer.value = await useGetGenerativeModelGP(question.value)
  }
  catch (error) {
  }
  finally {
    isLoading.value = false
  }
}

const originalText = ref('')

const showPopup = ref(false)
const showTrash = ref(false)
const showMiddleBtn = ref(true)
const boxA = ref<HTMLElement | null>(null)
const boxB = ref<HTMLElement | null>(null)
const boxAB = ref<HTMLElement | null>(null)
let isHandlerDragging = false

function startDragging() {
  isHandlerDragging = true
  document.addEventListener('mousemove', handleDragging)
  document.addEventListener('mouseup', stopDragging)
}

function stopDragging() {
  isHandlerDragging = false
  document.removeEventListener('mousemove', handleDragging)
  document.removeEventListener('mouseup', stopDragging)
}

function handleDragging(e: MouseEvent) {
  if (!isHandlerDragging || !boxA.value || !boxB.value || !boxAB.value)
    return
  const boxARect = boxA.value.getBoundingClientRect()
  if (!boxARect)
    return
  const maxWidthBox = boxAB.value.clientWidth * 0.7
  const minWidthBox = boxAB.value.clientWidth * 0.3
  let newWidth = e.clientX - boxARect.left
  if (newWidth > maxWidthBox)
    newWidth = maxWidthBox
  if (newWidth < minWidthBox)
    newWidth = minWidthBox
  boxA.value.style.width = `${newWidth}px`
  boxB.value.style.width = `calc(100% - ${newWidth}px)`
}

// if the textarea is not empty show the trash bin
function checkTrash() {
  showTrash.value = !!originalText.value
  showMiddleBtn.value = !!originalText.value
}

function openPopup() {
  showPopup.value = true
}
function closePopup() {
  showPopup.value = false
}
function deleteItem() {
  question.value = ''
  closePopup()
  showTrash.value = false
}
// show the sample text
function handleTrySampleText() {
  question.value = sampleText
  fetchAnswer()
}

const boundingReact = ref({ x: 0, y: 0 })
const tooltipVisible = ref(false)
// Optional: Handling placeholder manually
function handleFocus(event) {
  if (event.target.textContent === placeholder) {
    event.target.textContent = ''
    event.target.style.color = 'black' // Reset màu chữ
  }
}

function handleBlur(event) {
  if (event.target.textContent.trim() === '') {
    event.target.textContent = placeholder
    event.target.style.color = 'grey'
  }
  tooltipVisible.value = false
}
function handleMouseUp() {
  // const selection = window.getSelection()
  // if (selection?.toString().trim() === '')
  //   return
  // tooltipVisible.value = true
  const selection = window.getSelection()
  if (selection?.toString().trim()) {
    fetchParaphrasedText(selection.toString())
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    boundingReact.value = { x: rect.right, y: rect.top }
    tooltipVisible.value = true
  }
  else {
    tooltipVisible.value = false
  }
}
// tooltip api
async function fetchParaphrasedText(selectionText) {
  isLoading.value = true
  try {
    const response = await useGetGenerativeModelGP(selectionText)
    answer.value = response
  }
  catch (error) {
    console.error('Error fetching paraphrased text:', error)
    answer.value = 'Error fetching text'
  }
  finally {
    isLoading.value = false
  }
}
onMounted(() => {
  // co 1 su kien khi lang nghe no se lam gi do khi minh boi den
  document.addEventListener('selectionchange', () => {
    const selection = window.getSelection()

    if (!selection?.rangeCount || selection.toString().length === 0) {
      tooltipVisible.value = false
      return
    }
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    boundingReact.value = {
      x: rect.right,
      y: rect.top,
    }
  })
})

function replaceSelectedText() {
  const selection = window.getSelection()
  if (!selection.rangeCount)
    return

  const range = selection.getRangeAt(0)
  range.deleteContents()

  const newNode = document.createTextNode(answer.value)
  range.insertNode(newNode)

  const contentDiv = document.getElementById('bounding')
  if (contentDiv)
    question.value = contentDiv.textContent
  tooltipVisible.value = false
  selection.removeAllRanges()
}
</script>

<template>
  <div ref="boxAB" :class="$style.textArea">
    <form
      ref="boxA" :class="[$style.textAreaItem, $style.textAreaItemLeft]" @input="checkTrash"
      @submit.prevent="fetchAnswer"
    >
      <div
        id="bounding"
        contenteditable
        name="question" :class="$style.textAreaItemLeftTextArea"
        :placeholder="placeholder" @input="handleInput" @blur="handleBlur" @focus="handleFocus"
        @mouseup="handleMouseUp"
      />
      <!-- tooltip -->
      <div>
        <div
          v-if="tooltipVisible && !isLoading"
          :style="{
            backgroundColor: 'var(--color-primary)',
            borderRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            minWidth: '4rem',
            minHeight: '3rem',
            position: 'fixed',
            top: `${boundingReact.y}px`,
            left: `${boundingReact.x}px`,
            zindex: 100000,
            padding: '0.5rem',
          }"
       
        >
          {{ answer }}
          <img src="@/assets/svg/tick-double-svgrepo-com.svg" alt="" :class="$style.imgReplace"    @mousedown="replaceSelectedText" >
        </div>
      </div>

      <div :class="$style.textAreaFooter">
        <div :class="$style.textAreaFooterUpload">
          <img src="/src/assets/svg/upload-to-cloud-svgrepo-com.svg" alt="">
          <span>Upload doc</span>
        </div>
        <!-- <div > -->
        <button :class="$style.textAreaFooterSubmit" type="submit" :disabled="!question">
          Paraphrase
        </button>
        <!-- </div> -->
      </div>
      <div v-if="question.trim()" :class="$style.textAreaItemTrashBin" @click="openPopup">
        <img src="/src/assets/svg/trash-bin-2-svgrepo-com.svg" alt="">
      </div>
      <div v-if="showMiddleBtn" :class="$style.textBtnMiddle">
        <div :class="[$style.textBtnCommon, $style.textBtnTryBtn]" @click="handleTrySampleText">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-17j0t9x" focusable="false"
            aria-hidden="true" viewBox="0 0 30 30" width="30" height="30" style="font-size: 30px;"
          >
            <path
              d="M3.98489 7.49906C4.74195 6.96993 5.88318 7.0714 6.56292 7.63276L5.78331 6.49958C5.15592 5.6048 5.38062 4.63673 6.27621 4.00853C7.17179 3.38274 9.70956 5.06519 9.70956 5.06519C9.07653 4.16155 9.19492 3.01629 10.0986 2.38246C11.0022 1.75103 12.2489 1.96929 12.882 2.87455L21.2741 14.7298L20.2045 25.0991L11.2784 21.8438L3.4928 10.3002C2.85413 9.39091 3.07481 8.13693 3.98489 7.49906Z"
              fill="#EF9645"
            />
            <path
              d="M2.24043 14.0944C2.24043 14.0944 1.32874 12.7655 2.65843 11.8546C3.98651 10.9437 4.8974 12.2718 4.8974 12.2718L9.12647 18.4394C9.27225 18.1962 9.43171 17.9562 9.6097 17.7194L3.74006 9.16058C3.74006 9.16058 2.82917 7.8325 4.15805 6.92161C5.48613 6.01072 6.39702 7.3388 6.39702 7.3388L11.9179 15.3902C12.1233 15.2227 12.3335 15.0544 12.5502 14.8893L6.14977 5.55407C6.14977 5.55407 5.23888 4.22599 6.56776 3.3151C7.89584 2.40421 8.80673 3.73229 8.80673 3.73229L15.2071 13.0659C15.4423 12.9217 15.6751 12.7969 15.9086 12.6648L9.92622 3.94089C9.92622 3.94089 9.01533 2.61281 10.3434 1.70192C11.6715 0.791027 12.5824 2.11911 12.5824 2.11911L18.9079 11.344L19.8695 12.747C15.8845 15.4804 15.5051 20.6228 17.7819 23.9434C18.237 24.6079 18.9014 24.1528 18.9014 24.1528C16.1688 20.167 17.0031 15.6882 20.989 12.9556L19.8139 7.07464C19.8139 7.07464 19.375 5.52508 20.9237 5.08534C22.4733 4.6464 22.913 6.19596 22.913 6.19596L24.2701 10.2261C24.8081 11.824 25.3807 13.4162 26.1386 14.9223C28.2785 19.1747 27.0004 24.4597 22.9654 27.2278C18.564 30.2455 12.5469 29.1236 9.52836 24.723L2.24043 14.0944Z"
              fill="#FFDC5D"
            />
            <path
              d="M9.73464 25.9383C6.51311 25.9383 3.25774 22.683 3.25774 19.4614C3.25774 19.0161 2.93156 18.6561 2.48618 18.6561C2.04081 18.6561 1.64697 19.0161 1.64697 19.4614C1.64697 24.2938 4.90234 27.5491 9.73464 27.5491C10.18 27.5491 10.54 27.1553 10.54 26.7099C10.54 26.2645 10.18 25.9383 9.73464 25.9383Z"
              fill="#5DADEC"
            />
            <path
              d="M5.70764 27.5153C3.29148 27.5153 1.68072 25.9045 1.68072 23.4884C1.68072 23.043 1.32071 22.683 0.875331 22.683C0.429953 22.683 0.0699463 23.043 0.0699463 23.4884C0.0699463 26.7099 2.4861 29.1261 5.70764 29.1261C6.15302 29.1261 6.51302 28.766 6.51302 28.3207C6.51302 27.8753 6.15302 27.5153 5.70764 27.5153ZM19.3992 1.74298C18.9546 1.74298 18.5938 2.10379 18.5938 2.54836C18.5938 2.99294 18.9546 3.35375 19.3992 3.35375C22.6207 3.35375 25.8423 6.24427 25.8423 9.79682C25.8423 10.2414 26.2031 10.6022 26.6476 10.6022C27.0922 10.6022 27.453 10.2414 27.453 9.79682C27.453 5.35593 24.2315 1.74298 19.3992 1.74298Z"
              fill="#5DADEC"
            />
            <path
              d="M23.4261 0.166046C22.9815 0.166046 22.6207 0.493032 22.6207 0.937605C22.6207 1.38218 22.9815 1.77682 23.4261 1.77682C25.8423 1.77682 27.4192 3.5688 27.4192 5.76991C27.4192 6.21448 27.813 6.5753 28.2584 6.5753C28.7038 6.5753 29.03 6.21448 29.03 5.76991C29.03 2.67965 26.6477 0.166046 23.4261 0.166046Z"
              fill="#5DADEC"
            />
          </svg>
          <span>Try Sample Text</span>
        </div>
        <div :class="[$style.textBtnCommon, $style.textBtnPaste]">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-17j0t9x" focusable="false"
            aria-hidden="true" viewBox="0 0 24 29" width="24" height="29" style="font-size: 30px;"
          >
            <path
              width="24" height="29" viewBox="0 0 24 29" fill="#81B68B" xmlns="http://www.w3.org/2000/svg"
              d="M20.7418 3.25678H15.4522C14.9207 1.78883 13.5286 0.72583 11.8835 0.72583C10.2384 0.72583 8.84639 1.78883 8.31489 3.25678H3.02521C1.63319 3.25678 0.494263 4.3957 0.494263 5.78772V26.0353C0.494263 27.4273 1.63319 28.5662 3.02521 28.5662H20.7418C22.1339 28.5662 23.2728 27.4273 23.2728 26.0353V5.78772C23.2728 4.3957 22.1339 3.25678 20.7418 3.25678ZM11.8835 3.25678C12.5795 3.25678 13.149 3.82624 13.149 4.52225C13.149 5.21826 12.5795 5.78772 11.8835 5.78772C11.1875 5.78772 10.618 5.21826 10.618 4.52225C10.618 3.82624 11.1875 3.25678 11.8835 3.25678ZM20.7418 26.0353H3.02521V5.78772H5.55615V9.58414H18.2109V5.78772H20.7418V26.0353Z"
            />
          </svg>
          <span>Paste Text</span>
        </div>
      </div>
    </form>
    <div :class="$style.handler" @mousedown="startDragging" @mouseup="stopDragging" />
    <div ref="boxB" :class="[$style.textAreaItem, $style.textAreaItemRight]">
      <div v-if="dieukien" :class="$style.textOutputPremiumContainer">
        <div :class="$style.textOutputPremium">
          <div :class="$style.textOutputPremiumTop">
            <h2>{{ dieukien?.title }}</h2>
            <br>
            <p>Uses</p>
            <ul :class="$style.textOutputPremiumTag">
              <li v-for="item in dieukien.uses_tag" :key="item">
                {{ item }}
              </li>
            </ul>
            <br>
          </div>
          <div :class="$style.textOutputPremiumBottom">
            <div :class="[$style.textOutputPremiumBottomItem, $style.textOutputPremiumBottomItemLeft]">
              <p>INPUT TEXT</p>
              <span>{{ dieukien?.input_text }}</span>
            </div>
            <div :class="$style.separationItem">
              <img src="@/assets/svg/arrow-sm-right-svgrepo-com.svg" alt="">
            </div>
            <div :class="[$style.textOutputPremiumBottomItem, $style.textOutputPremiumBottomItemRight]">
              <p>
                PARAPHRASED TEXT
              </p>
              <span v-html="getTextParaphrased()" />
            </div>
          </div>
        </div>
        <div :class="$style.UpgradeItem">
          <div :class="$style.UpgradeItemBtn">
            <img src="@/assets/svg/diamond-svgrepo-com.svg" alt="">
            <span>Unlock Premium Modes</span>
          </div>
          <div :class="$style.UpgradeItemSuggest">
            <span>3-Day Money-Back Guarantee</span>
            <img src="@/assets/svg/like-svgrepo-com.svg" alt="">
          </div>
        </div>
      </div>
      <span v-else-if="isLoading">
        Loading...
      </span>
      <span v-else-if="answer">
        {{ answer }}
      </span>

      <!-- popup -->
      <div v-if="showPopup" :class="$style.popup">
        <div :class="$style.popupContent">
          <div :class="$style.popupHeader">
            <h2>Delete Text</h2>
            <img src="/src/assets/svg/cancel-svgrepo-com.svg" @click="closePopup">
          </div>
          <div :class="$style.popupHeader">
            <p>You’re about to delete the Original and Paraphrased text.</p>
          </div>
          <div :class="$style.popupFooter">
            <div :class="$style.popupFooterCheckbox">
              <input type="checkbox">
              <label>Don't show again</label>
            </div>
            <div :class="$style.popupFooterText" @click="deleteItem">
              Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.textArea {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  justify-content: space-between;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border-radius: 0  0 1rem 1rem;
}

.textAreaItem {
  width: 48%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  max-width: 100%;

}

textarea {

}

.textAreaItemLeft {
  padding-left: 1.2rem;
  position: relative;
  border-radius: 0 0 0 1rem;
}
.textAreaItemLeftTextArea {
  font-size: 1rem;
  min-height: 22rem;
  border: none;
  outline: none;
  resize: none;
  width: 100%;

  background-color: #ffffff;
  margin-top: 1rem;
}
.textAreaItemTrashBin {
  position: absolute;
  top: 1rem;
  right: 0.1rem;
  cursor: pointer;

}

.textAreaItemTrashBin img {
  width: 1.5rem;
  height: 1.5rem;
}

.textAreaItemRight {
  padding-right: 1.2rem;
  border-radius: 0 0 1rem 0;
  margin-top: 1rem;
}
.textAreaItemRight p {
  font-size: 1rem;
}

.handler {
  width: 20px;
  padding: 0;
  cursor: ew-resize;
  flex: 0 0 auto;

}

.handler::before {
  content: '';
  display: block;
  width: 0.2rem;
  height: 100%;
  background: #cecaca;
  margin: 0 auto;
}

.textAreaFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.textAreaFooterUpload {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.textAreaFooterUpload img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.4rem;
}

.textAreaFooterUpload span {
  font-weight: 600;
  font-size: 0.675rem;
}

.textAreaFooterSubmit {
  padding: 0.313rem 1.563rem 0.375rem;
  font-size: 1.25em;
  font-weight: bold;
  border-radius: 25px;
  text-transform: capitalize;
  position: relative;
  width: 8.75rem;
  min-height: 2.5rem;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  cursor: pointer;
}

::placeholder {
  color: hsl(0, 0%, 60%);
  /* Màu chữ */
  font-size: 1rem;
}

.popup {
  width: 30%;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 1rem;
  border-radius: 1px 1px 8px 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.popupHeader {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
}

.popupHeader img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 1rem;
  cursor: pointer;
}

.popupFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popupFooterText {
  color: rgb(45, 119, 203);
  cursor: pointer;
}

.textBtnMiddle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

}

.textBtnCommon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 0.625rem;
  border: 1px solid var(--color-primary-light);
  border-radius: 0.5rem;
  width: 8.125rem;
  height: 4.625rem;
  box-sizing: border-box;
}

.textBtnCommon:hover {
  background-color: #f8faf7;
  transition: 0.5s ease;
}

.textBtnCommon span {
  font-style: italic;
  color: var(--color-primary);
  font-size: 0.75rem;
  line-height: 16px;
  cursor: pointer;
  white-space: nowrap;
  margin-top: 0.2rem;

}
.textOutputPremium{
  border-radius: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

}
.textOutputPremium hr{
  margin: 0;
  color: #E2E4E6;
}
.textOutputPremium h2{
  text-align: center;
  margin: 0;
}
.textOutputPremium p{
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
}
.textOutputPremiumTop{
  padding: 0.5rem 1rem 0 1rem;
  border-bottom: 1px solid #E2E4E6;
}
.textOutputPremiumBottom {
  padding: 0.7rem 1rem;
  display: flex;

}

.textOutputPremiumTag{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

}
.textOutputPremiumTag li {
  padding: 0.375rem;
  margin: 0.375rem;
  border-radius: 0.5rem;
  background-color: #FEF8E8;
  font-size: 0.875rem;
}
.textOutputPremiumBottomItem{
  padding: 0.5rem 0;

}
.textOutputPremiumBottomItem p:first-child{
  font-size: 0.75rem;
  margin-bottom: 0.5rem;

}
.textOutputPremiumBottomItem span{
  font-size: 1.125rem;

}
.textOutputPremiumBottomItemRight p{
  color: var(--color-primary);
}
.separationItem {
  width: 2.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #5F6368;
  margin: 1rem;
  align-self: center;
  position: relative;
}
.separationItem::before{
  content: '';
  width: 0.1rem;
  height: 2.8rem;
  background-color: #E2E4E6;
  position: absolute;
  top: -115%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.separationItem::after{
  content: '';
  width: 0.1rem;
  height: 2.8rem;
  background-color: #E2E4E6;
  position: absolute;
  top: 210%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.separationItem img{
  width: 0.875rem;
  height: .875rem;

}
.UpgradeItem{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  flex-direction: column;

}
.UpgradeItemBtn{
  background-color: var(--color-primary);
  // padding: 0.5rem 0.844rem;
  height: 2.313rem;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    color: white;
    cursor: pointer;
}
.UpgradeItem img{
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.5rem;
}
.UpgradeItemSuggest{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.UpgradeItemSuggest span{
  font-size: 0.75rem;
  font-weight: 600;
  color: #5F6368;
  margin-right: 0.5rem;
}
.UpgradeItemSuggest img{
  width: 1rem;
  height: 1rem;

}
// .tooltipChangeData{
//   background-color: red;
//   width: 20px;
//   height:20px;
// }
.imgReplace{
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}
</style>
