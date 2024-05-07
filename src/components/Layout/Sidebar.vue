<script setup lang="ts">
import { EventBus } from '@/eventBus';

const isActive = ref(false);
function toggleSidebar() {
  isActive.value = !isActive.value;
}
EventBus.on('toggleSidebar', toggleSidebar);

onUnmounted(() => {
  EventBus.off('toggleSidebar', toggleSidebar);
})
const selectedMenuItem = ref(null)

function selectMenuItem( item: any) {
  selectedMenuItem.value = item
}
</script>

<template>
  <div :class="[$style.sideBar, $style.newClass, isActive ? $style.active : '', $style.isSidebarActive]">
    <div :class="[$style.sideBarGroupFirst, $style.sideBarGroup]">
      <a :class="[$style.sideBarItem, { selected: selectedMenuItem === 'Paraphraser' }]" href="#" @click="selectMenuItem('Paraphraser')">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgParaph]" />
        <div :class="$style.sideBarItemIconWidth">
          <div :class="[$style.sideBarItemIcon, $style.itemIcBgrCParaph]">
            <img src="@/assets/svg/paragraph-break-two-svgrepo-com.svg" alt="paraphraser icon">
          </div>
        </div>
        <span>Paraphraser</span>
      </a>
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgGrammar]" />
        <div :class="$style.sideBarItemIconWidth">
          <div :class="[$style.sideBarItemIcon, $style.itemIcBgrCGrammar]">
            <img src="@/assets/svg/spell-check.svg" alt="paraphraser icon">
          </div>
        </div>

        <span>Grammar Checker</span>
      </a>
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgPlag]" />
        <div :class="$style.sideBarItemIconWidth">

          <div :class="[$style.sideBarItemIcon, $style.itemIcBgrCPlag]">

            <img src="@/assets/svg/search-checker.svg" alt="paraphraser icon">
          </div>
        </div>
        <span>Plagiarism Checker</span>
      </a>
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgQuillBot]" />
        <div :class="$style.sideBarItemIconWidth">

          <div :class="[$style.sideBarItemIcon, $style.itemIcBgrCQuillBot]">

            <img src="@/assets/svg/write-svgrepo-com.svg" alt="paraphraser icon">
          </div>
        </div>
        <span>QuillBot Flow</span>
      </a>
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgSummarizer]" />
        <div :class="$style.sideBarItemIconWidth">

          <div :class="[$style.sideBarItemIcon, $style.itemIcBgrCSummarizer]">
            <img src="@/assets/svg/paragraph-left-svgrepo-com.svg" alt="paraphraser icon">
          </div>
        </div>
        <span>Summarizer</span>
      </a>
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgCitation]" />
        <div :class="$style.sideBarItemIconWidth">
          <div :class="[$style.sideBarItemIcon, $style.itemIcBgrCCitation]">
            <img src="@/assets/svg/quotation-right-mark-svgrepo-com.svg" alt="paraphraser icon">
          </div>
        </div>
        <span>Citation Generator</span>
      </a>
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgTrans]" />
        <div :class="$style.sideBarItemIconWidth">
          <div :class="[$style.sideBarItemIcon, $style.itemIcBgrCTrans]">
            <img src="@/assets/svg/translate-fill-svgrepo-com.svg" alt="paraphraser icon">
          </div>
        </div>
        <span>Translator</span>
      </a>
    </div>
    <div :class="[$style.sideBarGroupSecond, $style.sideBarGroup]">
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBg, $style.sideBarItemBgBtnPremium]" />
        <div :class="[$style.sideBarItemBtnIcon]">
          <img src="@/assets/svg/diamond-svgrepo-com-sidebar.svg" alt="paraphraser icon">
        </div>
        <span style=" color: #DC9E00;">QuillBot Premium</span>
      </a>
    </div>
    <div :class="[$style.sideBarGroupThird, $style.sideBarGroup]">
      <a :class="[$style.sideBarItem, $style.sideBarItemGroupThird]" href="#">
        <div :class="[$style.sideBarItemBtnIcon]">
          <img src="@/assets/svg/chrome-svgrepo-com.svg" alt="paraphraser icon">
        </div>
        <span>QuillBot for Chrome</span>
        <div :class="[$style.sideBarItemBtnLaunch]">
          <img src="@/assets/svg/launch-2-svgrepo-com.svg" alt="paraphraser icon">
        </div>
      </a>
      <a :class="[$style.sideBarItem, $style.sideBarItemGroupThird]" href="#">
        <div :class="[$style.sideBarItemBtnIcon]">
          <img src="@/assets/svg/word-svgrepo-com.svg" alt="paraphraser icon">
        </div>
        <span>QuillBot for Word</span>
        <div :class="[$style.sideBarItemBtnLaunch]">
          <img src="@/assets/svg/launch-2-svgrepo-com.svg" alt="paraphraser icon">
        </div>
      </a>
      <a :class="[$style.sideBarItem, $style.sideBarItemGroupThird]" href="#">
        <div :class="[$style.sideBarItemBtnIcon]">
          <img src="@/assets/svg/computer-svgrepo-com.svg" alt="paraphraser icon">
        </div>
        <span>QuillBot for macOS</span>
        <div :class="[$style.sideBarItemBtnLaunch]">
          <img src="@/assets/svg/launch-2-svgrepo-com.svg" alt="paraphraser icon">
        </div>
      </a>
    </div>
    <div :class="[$style.sideBarGroupFourth, $style.sideBarGroup]">
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBtnIcon]">
          <img src="@/assets/svg/question-svgrepo-com.svg" alt="paraphraser icon">
        </div>
        <span>Help center</span>
      </a>
      <a :class="$style.sideBarItem" href="#">
        <div :class="[$style.sideBarItemBtnIcon]">
          <img src="@/assets/svg/mail-svgrepo-com.svg" alt="paraphraser icon">
        </div>
        <span>Contact us</span>
      </a>
    </div>
    <div :class="$style.version ">
      v15.39.2
    </div>
  </div>
</template>

<style lang="scss" module>
a {
  text-decoration: none;
}

.menuBtn img {
  width: 1.5rem;
  height: 1.5rem;
}

.sideBar {
  height: calc(100vh - 3rem);
  border-right: 1px solid #e1d8d8;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  margin-top: 3rem;
}

.sideBarGroup {
  width: 100%;
  position: sticky;
  top: 0;
}

.sideBarGroupFirst {
  padding: 0.5rem 0;
}

.sideBarItem {
  display: flex;
  padding: 0.5rem 0.813rem;
  align-items: center;
  width: 3rem;
  max-height: 2.5rem;


}

.sideBarItemBg {
  position: absolute;
  height: 24px;
  left: 0;
  border-radius: 0px 4px 4px 0px;
  border-left: 4px solid;
  opacity: 0;
}

.sideBarItem span {
  font-size: 0.875rem;
  font-weight: 600;
  color: #232021;
  flex-grow: 1;
  opacity: 0;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.sideBarItemBgParaph {
  border-color: var(--color-primary);
}

.sideBarItemBgGrammar {
  border-color: #EF414C;
}

.sideBarItemBgPlag {
  border-color: #F38B2A;
}

.sideBarItemBgQuillBot {
  border-color: #319DFF;
}

.sideBarItemBgSummarizer {
  border-color: #8051FF;
}

.sideBarItemBgCitation {
  border-color: #0067C5;
}

.sideBarItemBgTrans {
  border-color: #252525;

}

// .sideBarItemIconWidth{
//   width: 15%;
// }
.sideBarItemIcon {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  // margin-right: 0.5rem;

}

.sideBarItemIcon img {
  width: 0.875rem;
  height: 0.875rem;
}

.itemIcBgrCParaph {
  background-color: var(--color-primary);
}

.itemIcBgrCGrammar {
  background-color: #EF414C;
}

.itemIcBgrCPlag {
  background-color: #F38B2A;

}

.itemIcBgrCQuillBot {
  background-color: #319DFF;
}

.itemIcBgrCSummarizer {
  background-color: #8051FF;
}

.itemIcBgrCCitation {
  background-color: #0067C5;
}

.itemIcBgrCTrans {
  background-color: #252525;
}

.sideBarItemIcon img {
  width: 0.875rem;
  height: 0.875rem;
}

//second group
.sideBarGroupSecond {
  border-bottom: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc;
  padding: 0.25rem 0;
}

.sideBarItemBtnIcon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;

}

.sideBarItemBtnText {
  color: #DC9E00;

}

.sideBarItemBgBtnPremium {
  border-color: #DC9E00;
  display: none;

}

.sideBarGroupThird {
  border-bottom: 1px solid #dcdcdc;
  padding: 0.5rem 0;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.sideBarItemGroupThird {
  position: relative;
}

.sideBarItemBtnLaunch {
 display: none;

}

//fourth group
.sideBarGroupFourth {
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.version{
  font-size: 0.75rem;
  line-height: 16px;
  font-weight: 600;
  padding: 0 0.938rem 0.75rem;
  display: block;

  position: absolute;
  bottom: 0;
  opacity: 0;

}


.active .sideBarItem span {

  opacity: 1;
  font-size: 0.875rem;

}
.active .sideBarItem{
  width: 100%;


}
.active .sideBarItem .sideBarItemBtnLaunch {

  opacity: 1;

}
.active .version{
  opacity: 1;
  visibility: visible;
}
.selected{
  color: red;
}
</style>
