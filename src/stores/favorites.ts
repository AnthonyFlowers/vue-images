import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import api, { ImgurData } from "../api/imgur";

const COVER_ROOT = "https://i.imgur.com";
const initialState = { items: [] };

interface State {
  items: ImgurData[];
}

export const useFavoritesStore = defineStore("favoritesStore", {
  state: (): State => {
    return initialState;
  },
  getters: {
    allFavorites: (state): ImgurData[] => {
      console.log("allFavorites", state.items);
      return state.items;
    },
  },
  actions: {
    async fetchFavorites() {
      const authStore = useAuthStore();
      const data = (await api.fetchFavorites(authStore.token)).data.data;

      this.items = data.map((item) => {
        item.displayUrl = `${COVER_ROOT}/${item.cover}.${
          item.type.split("/")[1]
        }`;
        return item;
      });

      console.log("fetchFavorites", this.items);
    },
  },
});
