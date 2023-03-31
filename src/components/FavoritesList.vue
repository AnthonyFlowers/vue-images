<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useFavoritesStore } from "../stores/favorites";
import Image from "./media/Image.vue";
import { ImageMedia } from "../api/imgur";
const { allFavorites } = storeToRefs(useFavoritesStore());
</script>
<template>
  <div class="image-container">
    <div v-for="image in allFavorites">
      <div v-if="!image.images">
        <img :src="image.displayUrl" />
        {{ image.images_count }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "FavoritesList",
  created() {
    const store = useFavoritesStore();
    store.fetchFavorites();
  },
  components: { Image },
};
</script>
<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>
