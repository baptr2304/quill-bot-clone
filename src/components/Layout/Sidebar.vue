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
  background-color: white;
  z-index: 100;
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
<!-- <template>
   <div :class="$style.sidebar">
    <div :class="$style.logoDetails">
      <i class='bx bxl-codepen icon'></i>
      <div class="logo_name">SideMenu</div>
      <i class='bx bx-menu' id="btn"></i>
    </div>
    <ul :class="$style.navList">
      
      <li>
        <a href="#">
          <i class='bx bx-grid-alt'></i>
          <span :class="$style.links_name">Dashboard</span>
        </a>
        
      </li>
      <li>
        <a href="#">
          <i class='bx bx-user'></i>
          <span :class="$style.links_name">User</span>
        </a>
        
      </li>
      <li>
        <a href="#">
          <i class='bx bx-chat'></i>
          <span :class="$style.links_name">Messages</span>
        </a>
      
      </li>
      <li>
        <a href="#">
          <i class='bx bx-pie-chart-alt-2'></i>
          <span :class="$style.links_name">Analytics</span>
        </a>
       
      </li>
      <li>
        <a href="#">
          <i class='bx bx-folder'></i>
          <span :class="$style.links_name">File Manager</span>
        </a>
        
      </li>
      <li>
        <a href="#">
          <i class='bx bx-cart-alt'></i>
          <span :class="$style.links_name">Order</span>
        </a>
        <span class="tooltip">Order</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-heart'></i>
          <span :class="$style.links_name">Saved</span>
        </a>
        
      </li>
      <li>
        <a href="#">
          <i class='bx bx-cog'></i>
          <span :class="$style.links_name">Setting</span>
        </a>
       
      </li>
      <li :class="$style.profile">
        <div :class="$style.profileDetails">
      
          <div :class="$style.name_job">
            <div :class="$style.name">Logout</div>
          </div>
        </div>
    
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss" module>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open {
  width: 250px;
}
.sidebar .logoDdetails {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logoDdetails .icon {
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar .logoDdetails .logo_name {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar.open .logoDetails .icon,
.sidebar.open .logoDetails .logo_name {
  opacity: 1;
}
.sidebar .logoDetails #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar.open .logoDetails #btn {
  text-align: right;
}
.sidebar i {
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar .navList {
  margin-top: 20px;
  height: 100%;
}
.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li .tooltip {
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}
.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar.open li .tooltip {
  display: none;
}
.sidebar input {
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: #1d1b31;
}
.sidebar.open input {
  padding: 0 20px 0 50px;
  width: 100%;
}
.sidebar .bx-search {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  background: #1d1b31;
  color: #fff;
}
.sidebar.open .bx-search:hover {
  background: #1d1b31;
  color: #fff;
}
.sidebar .bx-search:hover {
  background: #fff;
  color: #11101d;
}
.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #11101d;
}
.sidebar li a:hover {
  background: #fff;
}
.sidebar li a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .links_name {
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
  color: #11101d;
}
.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.sidebar li.profile {
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: #1d1b31;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar.open li.profile {
  width: 250px;
}
.sidebar li .profileDetails {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.sidebar li.profile .name,
.sidebar li.profile .job {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}
.sidebar li.profile .job {
  font-size: 12px;
}
.sidebar .profile #log_out {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #1d1b31;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}
.sidebar.open .profile #log_out {
  width: 50px;
  background: none;
}
.home-section {
  position: relative;
  background: #e4e9f7;
  min-height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
}
.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}
.home-section .text {
  display: inline-block;
  color: #11101d;
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
}
@media (max-width: 420px) {
  .sidebar li .tooltip {
    display: none;
  }
}

</style> -->