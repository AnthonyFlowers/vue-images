<script lang="ts" setup>
import { useImageStore } from "../stores/images";
const { uploadImages } = useImageStore();
</script>
<template>
  <div class="dropper">
    <input
      type="file"
      @change="($event) => uploadImages((<HTMLInputElement>$event.target).files)"
      multiple
      accept="image/*"
    /><span>Drag files Here!</span>
  </div>
</template>
<script lang="ts">
export default {
  name: "UploadForm",
};
</script>
<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropper:hover {
  background-color: #eee;
}
input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>
