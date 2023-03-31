<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
import { useImageStore } from "../stores/images";
import Image from "./media/Image.vue";
const { allImages } = storeToRefs(useImageStore());
const { isLoggedIn } = storeToRefs(useAuthStore());
</script>
<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <Image v-for="image in allImages" :image-url="image.link" />
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>
<script lang="ts">
export default {
  name: "ImageList",
  created() {
    const store = useImageStore();
    store.fetchImages();
  },
};
</script>
<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
</style>
