<script setup lang="ts">
</script>

<template>
  <div>
    <div :class="$style.layout">
      <Header />
      <div style="display: flex;">
        <Sidebar />
        <RouterView />
      </div>
    </div>
   
  </div>
</template>

<style lang="scss" module>
// .layout {
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   overflow-x: hidden;
// }
</style>
