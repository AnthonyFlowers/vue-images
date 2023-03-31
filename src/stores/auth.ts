import { defineStore } from "pinia";
import api from "../api/imgur";
import qs from "qs";
import { router } from "../main";

const imgurTokenLabel = "imgur_token";
const usernameLabel = "imgur_username";

const initialState = {
  token: window.localStorage.getItem(imgurTokenLabel),
  username: window.localStorage.getItem(usernameLabel),
};

interface State {
  token: string | null;
}

export const useAuthStore = defineStore("authStore", {
  state: (): State => initialState,
  getters: {
    isLoggedIn: (state): boolean => !!state.token,
  },
  actions: {
    login() {
      api.login();
    },
    finalizeLogin(hash: string) {
      const query = qs.parse(hash.replace("#", "")) as { access_token: string };
      const nextToken = query.access_token;
      this.token = nextToken;
      window.localStorage.setItem(imgurTokenLabel, nextToken);
      router.push("/");
    },
    logout() {
      this.token = null;
      window.localStorage.removeItem(imgurTokenLabel);
    },
  },
});
