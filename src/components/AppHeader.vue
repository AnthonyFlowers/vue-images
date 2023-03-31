<script lang="ts" setup>
import { useAuthStore } from "../stores/auth";
const store = useAuthStore();
</script>
<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <div class="right menu">
      <a v-if="!store.isLoggedIn" href="#" class="item" @click="store.login()"
        >Log In</a
      >
      <div v-else class="horizontal">
        <router-link to="/favorites" class="item">Favorites</router-link>
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload Photo</router-link>
        <a href="#" class="item" @click="store.logout()">Logout</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "AppHeader",
};
</script>
<style scoped>
.horizontal {
  display: flex;
}
</style>
