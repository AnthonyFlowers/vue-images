<script lang="ts" setup></script>
<template>
  <img :src="imageUrl" />
</template>
<script>
export default {
  name: "Image",
  props: {
    imageUrl: String,
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
  padding: 5px;
}
</style>
