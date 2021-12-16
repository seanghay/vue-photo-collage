<template>
  <div class="vue-photo-mask">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.vue-photo-mask {
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  cursor: pointer;
  border-radius: var(--vue-photo-grid-radius);
}
</style>
