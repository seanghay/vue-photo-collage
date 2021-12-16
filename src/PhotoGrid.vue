<template>
  <div 
    class="vue-photo-grid" 
    @click="$emit('click')">

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.vue-photo-grid {
  display: flex;
  position: relative;
  flex: 1;
  cursor: pointer;
  
  & + & {
    margin-left: var(--vue-photo-grid-gap);
  }

}
</style>
