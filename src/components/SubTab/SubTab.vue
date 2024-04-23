<script setup lang="ts">
import StandardItem from './SubTabItem/StandardItem.vue'

const activeSubItem = ref('Standard')
function openTab(tabName) {
  activeSubItem.value = tabName
}
</script>

<template>
  <div :class="$style.subTab">
    <div :class="$style.subTabText">
      <span>Modes:&nbsp;</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Standard' ? $style.activeSubItem : '']"
      @click="openTab('Standard')"
    >
      <span :class="activeSubItem === 'Standard' ? $style.activeSpan : ''">Standard</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Fluency' ? $style.activeSubItem : '']"
      @click="openTab('Fluency')"
    >
      <span :class="activeSubItem === 'Fluency' ? $style.activeSpan : ''">Fluency</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Natural' ? $style.activeSubItem : '']"
      @click="openTab('Natural')"
    >
      <span :class="activeSubItem === 'Natural' ? $style.activeSpan : ''">Natural</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Formal' ? $style.activeSubItem : '']"
      @click="openTab('Formal')"
    >
      <span :class="activeSubItem === 'Formal' ? $style.activeSpan : ''">Formal</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Academic' ? $style.activeSubItem : '']"
      @click="openTab('Academic')"
    >
      <span :class="activeSubItem === 'Academic' ? $style.activeSpan : ''">Academic</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Simple' ? $style.activeSubItem : '']"
      @click="openTab('Simple')"
    >
      <span :class="activeSubItem === 'Simple' ? $style.activeSpan : ''">Simple</span>
    </div>
    <!---->
    <div
      :class="[$style.subTabItem, activeSubItem === 'Creative' ? $style.activeSubItem : '']"
      @click="openTab('Creative')"
    >
      <span :class="activeSubItem === 'Creative' ? $style.activeSpan : ''">Creative</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Extend' ? $style.activeSubItem : '']"
      @click="openTab('Extend')"
    >
      <span :class="activeSubItem === 'Extend' ? $style.activeSpan : ''">Extend</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Shorten' ? $style.activeSubItem : '']"
      @click="openTab('Shorten')"
    >
      <span :class="activeSubItem === 'Shorten' ? $style.activeSpan : ''">Shorten</span>
    </div>
    <div
      :class="[$style.subTabItem, activeSubItem === 'Custom' ? $style.activeSubItem : '']"
      @click="openTab('Custom')"
    >
      <span :class="activeSubItem === 'Custom' ? $style.activeSpan : ''">Custom</span>
    </div>
    <div :class="$style.subTabRange">
      <span :class="$style.subTabText">Synonyms: &nbsp;</span>
      <input id="vol" type="range" name="vol" min="0" max="100" value="50">
    </div>
    <div :class="$style.line" />
  </div>
  <div :class="[$style.subTabContents, activeSubItem === 'Standard' ? $style.activeSubTab : '']">
    <!-- <p>Content for Standard</p> -->
    <StandardItem />
  </div>
  <div :class="[$style.subTabContents, activeSubItem === 'Fluency' ? $style.activeSubTab : '']">
    <p>Content for Fluency</p>
  </div>
</template>

<style lang="scss" module>
//subTabItem
.subTab {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
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
</style>
