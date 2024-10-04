<script setup lang="ts">
const props = defineProps<{
  language: string
}>()
const levels = [
  {
    id: 1,
    name: 'Standard',
    language: 'All',
  },
  {
    id: 2,
    name: 'Fluency',
    language: 'English',
  },
  {
    id: 3,
    name: 'Natural',
    language: 'English',
    premium: {
      title: 'Natural mode',
      uses_tag: ['Personal Blogs & Diaries', 'Social Media Posts', 'Speeches & Talks', 'Creative Writing', 'Fiction & Non-fiction', 'Poetry'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',

    },

  },
  {
    id: 4,
    name: 'Formal',
    language: 'English',
    premium: {
      title: 'Formal mode',
      uses_tag: ['Research papers/reports', 'Essays', 'Professional presentations', 'Work/professional emails', 'Cover Letters', 'Technical and white papers'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',
    },
  },
  {
    id: 5,
    name: 'Academic',
    language: 'English',
    premium: {
      title: 'Academic mode',
      uses_tag: ['Research papers/reports', 'Essays', 'Professional presentations', 'Work/professional emails', 'Cover Letters', 'Technical and white papers'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',
    },
  },
  {
    id: 6,
    name: 'Simple',
    language: 'English',
    premium: {
      title: 'Simple mode',
      uses_tag: ['Research papers/reports', 'Essays', 'Professional presentations', 'Work/professional emails', 'Cover Letters', 'Technical and white papers'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',
    },
  },
  {
    id: 7,
    name: 'Creative',
    language: 'English',
    premium: {
      title: 'Creative mode',
      uses_tag: ['Research papers/reports', 'Essays', 'Professional presentations', 'Work/professional emails', 'Cover Letters', 'Technical and white papers'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',
    },
  },
  {
    id: 8,
    name: 'Expand',
    language: 'English',
    premium: {
      title: 'Expand mode',
      uses_tag: ['Research papers/reports', 'Essays', 'Professional presentations', 'Work/professional emails', 'Cover Letters', 'Technical and white papers'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',
    },
  },
  {
    id: 9,
    name: 'Shorten',
    language: 'English',
    premium: {
      title: 'Shorten mode',
      uses_tag: ['Research papers/reports', 'Essays', 'Professional presentations', 'Work/professional emails', 'Cover Letters', 'Technical and white papers'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',
    },
  },
  {
    id: 10,
    name: 'Custom',
    language: 'English',
    premium: {
      title: 'Custom mode',
      uses_tag: ['Research papers/reports', 'Essays', 'Professional presentations', 'Work/professional emails', 'Cover Letters', 'Technical and white papers'],
      input_text: 'Agriculture’s chronicle is a testament to human ingenuity’s evolution.',
      paraphrased_text: 'The {transition} to an agrarian society spanned several millennia.',
    },
  },

]

const visibleTabs = ref(levels.slice(0, 10))
const hiddenTabs = ref(levels.slice(10))
const showMoreDropdown = ref(false)
function toggleMoreDropdown() {
  showMoreDropdown.value = !showMoreDropdown.value
}
function handleResize() {
  if (window.innerWidth > 1000 && window.innerWidth <= 1286) {
    visibleTabs.value = levels.slice(0, 5)
    hiddenTabs.value = levels.slice(5)
  }
  if (window.innerWidth <= 1000 && window.innerWidth > 768) {
    visibleTabs.value = levels.slice(0, 3)
    hiddenTabs.value = levels.slice(3)
  }
  if (window.innerWidth <= 768) {
    visibleTabs.value = levels.slice(0, 1)
    hiddenTabs.value = levels.slice(1)
  }
}

window.addEventListener('resize', handleResize)
onMounted(() => handleResize())
const activeSubItem = ref('Standard')
function openTab(tabName: string) {
  activeSubItem.value = tabName
}

const itemActive = computed(() => levels.find(item => item.name === activeSubItem.value))
function shouldShowTab(item: any) {
  const currentLanguage = props.language.toLowerCase()
  if (currentLanguage === 'english')
    return true
  return item.name === 'Standard'
}
</script>

<template>
  <div :class="$style.subTab">
    <div :class="$style.subTabText">
      <span>Modes:&nbsp;</span>
    </div>
    <div v-for="item in visibleTabs" :key="item.id">
      <div v-if="shouldShowTab(item)" :class="[$style.subTabItem, activeSubItem === item.name ? $style.activeSubItem : '']" @click="openTab(item.name)">
        <span :class="activeSubItem === item.name ? $style.activeSpan : ''">{{ item.name }}</span>
      </div>
    </div>
    <div v-if="hiddenTabs.length > 0" :class="[$style.subTabItem, $style.moreTab]" @click="toggleMoreDropdown">
      <span>More</span>
      <div v-if="showMoreDropdown" :class="$style.subTabDropDown">
        <div v-for="item in hiddenTabs" :key="item.id" :class="[$style.dropDownItem, activeSubItem === item.name ? $style.activeSubItem : '']" @click="openTab(item.name)">
          <span :class="activeSubItem === item.name ? $style.activeSpan : ''">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div v-if="props.language.toLowerCase() === 'english'" :class="$style.subTabRange">
      <span :class="$style.subTabText">Synonyms: &nbsp;</span>
      <input id="vol" type="range" name="vol" min="0" max="100" value="50">
    </div>
    <div :class="$style.line" />
  </div>
  <div v-for="item in levels" :key="item.id">
    <div v-if="activeSubItem === item.name" :class="[$style.subTabContents, activeSubItem === item.name ? $style.activeSubTab : '']">
      <StandardItem :condition-display="itemActive?.premium" />
    </div>
  </div>
</template>

<style lang="scss" module>
.subTab {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  background-color: white;
}

.subTabItem {
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}

.subTabItem::after {
  content: "";
  width: 0;
  height: 0.1rem;
  background-color: var(--color-primary);
  position: absolute;
  left: 0;
  bottom: -0.7rem;
  transition: width 0.5s ease;
}

.subTabItem.activeSubItem::after {
  width: 120%;
  left: -8%;

}

.subTabText {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #252525;
  font-weight: 700;
  padding: 0.375rem 0.563rem;
}

.subTabContents {
  display: none;
}

.subTabContents.activeSubTab {
  display: block;
}

.activeSpan {
  color: var(--color-primary);
}
.subTabRange{
  display: flex;
  align-items: center;

}
input[type=range] {
  // -webkit-appearance: none;
  width: 6.25rem;
  height: 0.3rem;
}
.subTabDropDown{
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  border: 1px solid #e0e0e0;
  z-index: 1;
  margin-top: 0.5rem;
  width: 10rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.dropDownItem{
  cursor: pointer;
  padding: 0.5rem 0.75rem;
}
.moreTab {
  display: none;
}
@media screen and (max-width: 1024px) {
  .moreTab {
    display: block;
  }
}
</style>
