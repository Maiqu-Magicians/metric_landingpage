import { defineStore } from "pinia";
import login from "../apis/security/login";

export const loginState = defineStore("login", {
  state: () => {
    return {
      isLoggedIn: false,
      hasJWTs: false,
    };
  },
  actions: {
    async doLogin(username: string, password: string): Promise<void> {
      await login(username, password);
      this.isLoggedIn = true;
    },
  },
});
