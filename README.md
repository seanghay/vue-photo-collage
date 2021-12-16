# Vue Photo Collage

[![Publish to NPM Registry](https://github.com/seanghay/vue-photo-collage/actions/workflows/publish.yml/badge.svg)](https://github.com/seanghay/vue-photo-collage/actions/workflows/publish.yml)

A Vue.js@2 version of [react-photo-collage](https://github.com/sopetrichor/react-photo-collage)

<img src="https://user-images.githubusercontent.com/15277233/146314612-1fd03d11-f9a5-4eb2-aedc-17409ad5a16e.png" width=450>

### CodeSandbox

[![Edit vue-photo-collage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-photo-collage-lzbbq?fontsize=14&hidenavigation=1&theme=dark)

## Installation

```
npm i vue-photo-collage
```

## Usage

```vue
<template>
  <div>
    <photo-collage-wrapper 
    gapSize="6px"
    @itemClick="itemClickHandler"
    v-bind="collage"> </photo-collage-wrapper>
  </div>
</template>

<script>
import { PhotoCollageWrapper } from 'vue-photo-collage'

export default {
  components: {
    PhotoCollageWrapper,
  },
  methods: {
    itemClickHandler(data, i) {
      // click event
    }
  },
  data() {
    return {
      collage: {
        width: "1200px",
        height: ["400px", "400px"],
        layout: [2, 3],
        photos: [
          {
            source:
              "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1516832970803-325be7a92aa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93d7ac9abad6167aecb49ebd67fd5b6d&auto=format&fit=crop&w=751&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80",
          },
          {
            source:
              "https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80",
          },
        ],
        showNumOfRemainingPhotos: true,
      },
    };
  },
};
</script>
```


## Contribution

Pull requests are welcomed.
