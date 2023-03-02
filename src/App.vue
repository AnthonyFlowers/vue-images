<script lang="ts" setup>
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <div>
    <AppHeader />
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style scoped></style>
