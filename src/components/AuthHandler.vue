<script lang="ts" setup>
import { useAuthStore } from "../stores/auth";
</script>
<template>
  <div>Please wait...</div>
</template>
<script lang="ts">
export default {
  name: "AuthHandler",
  created() {
    const store = useAuthStore();
    store.finalizeLogin(window.location.hash);
  },
};
</script>
<style scoped></style>
