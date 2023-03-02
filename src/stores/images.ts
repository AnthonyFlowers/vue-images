import { defineStore } from "pinia";
import api from "../api/imgur";
import { router } from "../main";
import { useAuthStore } from "./auth";

const initialState = { images: [] };

interface State {
  images: string[];
}

export const useImageStore = defineStore("imageStore", {
  state: (): State => {
    return initialState;
  },
  getters: {
    allImages: (state): string[] => state.images,
  },
  actions: {
    async fetchImages() {
      const authStore = useAuthStore();
      const response = (await api.fetchImages(authStore.token)) as {
        data: { data: [] };
      };
      this.images = response.data.data;
    },
    async uploadImages(images: FileList) {
      const token = useAuthStore().token;
      await api.uploadImages(images, token);
      router.push("/");
    },
  },
});
