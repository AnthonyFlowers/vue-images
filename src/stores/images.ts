import { defineStore } from "pinia";
import api, { ImgurData } from "../api/imgur";
import { router } from "../main";
import { useAuthStore } from "./auth";

const initialState = { images: [] };

interface State {
  images: ImgurData[];
}

export const useImageStore = defineStore("imageStore", {
  state: (): State => {
    return initialState;
  },
  getters: {
    allImages: (state): ImgurData[] => state.images,
  },
  actions: {
    async fetchImages() {
      const authStore = useAuthStore();
      if (authStore.token) {
        const response = await api.fetchImages(authStore.token);
        this.images = response.data.data;
      }
    },
    async uploadImages(images: FileList | null) {
      const token = useAuthStore().token;
      if (images && token) {
        await api.uploadImages(images, token);
      }
      router.push("/");
    },
  },
});
