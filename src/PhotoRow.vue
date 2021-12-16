<template>
  <div class="vue-photo-row" :style="{ height: rowHeight }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    rowHeight: String,
  },
};
</script>

<style lang="scss" scoped>
.vue-photo-row {

  display: flex;
  box-sizing: border-box;

  & + & {
    margin-top: var(--vue-photo-grid-gap);
  }

}
</style>
