<script setup lang="ts">
import ImageComp from "./media/Image.vue";
import { defineComponent, type PropType } from "vue";
import { ImgurData } from "../api/imgur";
</script>
<template>
  <div>
    <h3>Gallery Item</h3>
    <div v-if="galleryItem">
      <div></div>
      <ImageComp :image-url="galleryItem.displayUrl" />
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "GalleryItem",
  props: { galleryItem: Object as PropType<ImgurData> },
  components: { ImageComp },
});
</script>
<style scoped></style>
