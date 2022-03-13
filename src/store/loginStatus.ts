import { defineStore } from "pinia";
import login from "../apis/security/login";

export const loginState = defineStore("login", {
  state: () => {
    return {
      isLoggedIn: false,
      hasJWTs: false,
      jwtToken: "",
    };
  },
  actions: {
    async doLogin(username: string, password: string): Promise<boolean> {
      let success = false;
      await login(username, password).then((jwtToken) => {
        if (jwtToken != "") {
          this.isLoggedIn = true;
          success = true;
          this.jwtToken = jwtToken;
        }
      });
      return success;
    },
  },
});
