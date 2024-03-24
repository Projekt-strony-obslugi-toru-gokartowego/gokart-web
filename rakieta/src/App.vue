<script setup lang="ts">
</script>

<template>
    <RouterView />  
</template>

<style lang="scss">
  body:has(.wcag) {
    * {
    background: black !important;
    color: yellow !important;
    border-color: yellow !important;
  }
  .p-divider.p-divider-vertical:before {
    border-left-color: yellow !important;
  }
}
  body:has(.wcagf) {
    * {
    font-size: 16px !important;
  }
}
* {
  font-size: 12px !important;
}
</style>
