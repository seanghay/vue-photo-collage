<template>
  <div class="vue-photo-thumb" :style="thumbStyle"><slot></slot></div>
</template>

<script>
export default {
  props: {
    thumb: String,
  },
  computed: {
    thumbStyle() {
      return {
        'background-image': `url(${this.thumb})`,
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-photo-thumb {
  flex: 1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: var(--vue-photo-grid-radius);
}
</style>
