import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import AuthHandler from "./components/AuthHandler.vue";
import ImageList from "./components/ImageList.vue";
import UploadForm from "./components/UploadForm.vue";

const routes = [
  { path: "/oauth2/callback", component: AuthHandler },
  { path: "/", component: ImageList },
  { path: "/upload", component: UploadForm },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
