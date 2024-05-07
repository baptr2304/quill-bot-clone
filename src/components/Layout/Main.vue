<script setup lang="ts">
import { ref } from 'vue';

const showAllItem = ref(false);
const activeSubItem = ref('');
const activeTab = ref('english');
const languages = [
  'English',
  'Vietnamese',
  'French',
  'Dutch',
  'Spanish',
  'Chinese',
  'Danish',
  'Afrikaans',
  'Arabic',
  'Bengali',
  'Bulgarian',
  'Czech',
  'Finnish',
  'German',
  'Greek',
  'Hindi',
  'Hungarian',
  'Indonesian',
];
const displayedLanguages = ref([...languages.slice(0, 3)]);

function updateDisplayedLanguages(selectedLang : any) {
  const selectedLower = selectedLang.toLowerCase();
  const currentlyDisplayed = displayedLanguages.value.map(lang => lang.toLowerCase());
  if (currentlyDisplayed.includes(selectedLower) && (currentlyDisplayed.indexOf(selectedLower) === 0 || currentlyDisplayed.indexOf(selectedLower) === 2)) 
    return; // Do not move if it's the first or third already displayed
  

  const index = languages.findIndex(lang => lang.toLowerCase() === selectedLower);
  if (index !== -1 && index !== 1) {
    const newLanguages = [...languages]; // Tạo một bản sao của mảng
    const selected = newLanguages.splice(index, 1)[0]; // Xóa và lưu ngôn ngữ được chọn
    newLanguages.splice(1, 0, selected); // Chèn ngôn ngữ được chọn vào vị trí thứ hai
    displayedLanguages.value = newLanguages.slice(0, 3); // Cập nhật danh sách hiển thị
  }
}

function tabClicked(tab: string) {
  activeTab.value = tab.toLowerCase();
  activeSubItem.value = '';
  updateDisplayedLanguages(tab);
}

function toggleAllItem() {
  showAllItem.value = !showAllItem.value;
}
</script>


<template>
  <div :class="$style.main">
    <div :class="$style.tabArea">
      <div :class="$style.tabButtons">
        <button
          v-for="(lang, index) in displayedLanguages" :key="index"
          :class="[$style.tabBtn, activeTab === lang.toLowerCase() ? $style.active : '']"
          @click="tabClicked(lang.toLowerCase())"
        >
          {{ lang }}
        </button>
        <button :class="[$style.tabBtn, activeTab === 'all' ? $style.active : '', $style.tabBtnAll]" @click="toggleAllItem">
          <span>All</span>
          <img src="/src/assets/svg/bottom-svgrepo-com.svg" alt="">
          <div v-show="showAllItem" :class="$style.tabAllItem">
            <div v-for="(language, index) in languages" :key="index" :class="[$style.selectedtabBtn, activeTab === language ? $style.active : '']" @click="tabClicked(language)">
              {{ language }}
            </div>
          </div>
        </button>
      </div>
      <SubTab :language="activeTab" />
    

      <DirectionMenu :class="$style.directionMenu"/>
    </div>
  </div>
</template>

  <style lang="scss" module>
  .main {
    flex-grow: 1;
    background-color: #f1f1f1;
    margin-top:3rem;
  }

  .tabArea {
    width: 100%;
    padding: 1.563rem 6.25rem 2.5rem 2.75rem;
    position: relative;

  }

  .tabButtons {
    display: flex;
    gap: 8px;

  }

  .tabBtn {
    border: none;
    color: #020617;
    background-color: #f1f1f1;
    border-radius: 8px 8px 0px 0px;
    font-weight: 600;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 0.875rem;
    line-height: 1.25rem;

  }

  .tabBtn:hover {
    background-color: #25252514;
  }

  .tabBtn.active {
    background-color: white;
  }

  .content {
    display: none;
    border-radius: 0 0 1rem 1rem;
  }

  .content.show {
    display: flex;
    gap: 14px;
    background-color: white;

  }

  .contentInfo {
    width: 100%;
  }

  .contentTitle {
    font-size: 0.875rem;
    margin-bottom: 10px;

  }
  //subTabItem
  .subTab{
    display: flex;
    margin: 20px 0 40px;
    border-bottom: 1px solid #e0e0e0;
  }
  .subTabItem{
    margin-right: 50px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
  }
  .subTabItem::after{
    content: "";
    width: 0;
    height: 3px;
    background-color: #ff004f;
    position: absolute;
    left: 0;
    bottom: 10px;
    transition: 0.5s;
  }
  .subTabItem.activeSubItem::after{
    width: 100%;
  }
  .subTabText{
    font-size: 18px;
    font-weight: 500;
  }
  .subTabContents{
    display: none;
  }
  .subTabContents.activeSubTab{
    display: block;
  }
  .tabBtnAll img{
    width: 1.25rem;
    height: 1.25rem;
  }
  .tabBtnAll{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .selectedtabBtn{
    padding: 0.8rem 1.5rem;
    font-weight: 300;

  }
  .selectedtabBtn:hover{
    background-color: #f1f1f1;
    border-radius: 0.2rem;
  }
  .tabAllItem{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    position: absolute;
    top: 100%;
    background-color:#ffff;
    padding: 1rem;
    // opacity: 0;
    transition: ease 0.5s;
    z-index: 3;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
.directionMenu{
  position: absolute;
  top: 7%;
  right: 2%;
}

  </style>
