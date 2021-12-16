<template>
  <div class="vue-photo-collage-wrapper">
    <photo-collage
      :disabled="disabled"
      :width="width"
      :height="internalHeight"
      :layout="layout"
      :layoutPhotoMaps="layoutPhotoMaps"
      :layoutNum="layoutNum"
      :remainingNum="remainingNum"
      :showNumOfRemainingPhotos="showNumOfRemainingPhotos"
      @itemClick="(data, i) => $emit('itemClick', data, i)"
    >
    </photo-collage>
  </div>
</template>

<script>
import PhotoCollage from "./PhotoCollage.vue";

function createPhotoIds(photos) {
  return photos.map((data, i) => {
    return { ...data, id: i };
  });
}

function createLayoutPhotoMaps(layout, photos) {
  const newPhotos = createPhotoIds(photos);
  const newMaps = {};
  layout.reduce((accumulator, currentValue, currentIndex) => {
    newMaps[currentIndex] = newPhotos.slice(
      accumulator,
      accumulator + currentValue
    );
    return accumulator + currentValue;
  }, 0);

  return newMaps;
}

export default {
  components: {
    PhotoCollage,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "800px",
    },
    height: {
      type: Array,
    },
    layout: {
      type: Array,
      default: [],
    },
    photos: {
      type: Array,
      default: [],
    },
    showNumOfRemainingPhotos: {
      type: Boolean,
      default: false,
    },
    gapSize: String,
    borderRadius: String,
  },
  data() {
    const layout = this.layout;
    const internalHeight = this.height;

    if (internalHeight.length < layout.length) {
      for (let i = 0; i < layout.length; i++) {
        internalHeight[i] = "200px";
      }
    }

    return {
      internalHeight,
      allowRender: false,
      layoutPhotoMaps: {},
      viewerIsOpen: false,
      currentImage: 0,
    };
  },
  watch: {
    layoutPhotoMaps: {
      handler() {
        this.allowRender = !Object.keys(this.layoutPhotoMaps).length;
      },
    },
    gapSize: {
      handler() {
        this.setGapSize();
      },
      deep: true,
    },
    borderRadius: {
      handler() {
        this.setBorderRadius();
      },
      deep: true,
    },
  },
  created() {
    this.layoutPhotoMaps = createLayoutPhotoMaps(this.layout, this.photos);
    this.setGapSize();
    this.setBorderRadius();
  },
  methods: {
    setGapSize() {
      document.documentElement.style.setProperty(
        "--vue-photo-grid-gap",
        this.gapSize
      );
    },
    setBorderRadius() {
      document.documentElement.style.setProperty(
        "--vue-photo-grid-radius",
        this.borderRadius
      );
    },
  },
  computed: {
    layoutNum() {
      return this.layout.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    },
    remainingNum() {
      return this.photos.length - this.layoutNum;
    },
  },
};
</script>
