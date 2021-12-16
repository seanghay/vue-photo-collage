<template>
  <div class="vue-num-of-remaining"><slot></slot></div>
</template>

<style lang="scss" scoped>
.vue-num-of-remaining {
  position: absolute;
  color: #fff;
  font-size: 35px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:before {
    content: "+";
  }
}
</style>
