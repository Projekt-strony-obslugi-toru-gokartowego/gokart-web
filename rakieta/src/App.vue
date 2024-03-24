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
  .p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: rgba(0, 0, 0, 0.5) !important;
}
  .p-image-preview-icon {
    background: transparent !important;
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
