<template>
  <photo-row :rowHeight="height">
    <photo-grid @click="$emit('itemClick', data, i)" v-for="(data, i) in photos" :key="i">
      <template v-if="showNumOfRemainingPhotos && remainingNum > 0 && data.id === (layoutNum - 1)">
        <photo-mask></photo-mask>
        <view-more>
          <num-of-remaining>{{remainingNum}}</num-of-remaining>
        </view-more>
      </template>
      <photo-thumb :thumb="data.source"></photo-thumb>
    </photo-grid>
  </photo-row>
</template>

<script>
import PhotoGrid from "./PhotoGrid.vue"
import PhotoRow from "./PhotoRow.vue"
import PhotoMask from "./PhotoMask.vue"
import ViewMore from "./ViewMore.vue"
import NumOfRemaining from "./NumOfRemaining.vue"
import PhotoThumb from './PhotoThumb.vue'

export default {
  components: {
    PhotoGrid,
    PhotoRow,
    ViewMore,
    NumOfRemaining,
    PhotoMask,
    PhotoThumb,
  },
  props: {
    height: String,
    photos: Array,
    layoutNum: Number,
    remainingNum: Number,
    showNumOfRemainingPhotos: Boolean,
  }
}
</script>