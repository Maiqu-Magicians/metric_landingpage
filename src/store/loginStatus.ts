import { defineStore } from "pinia";
import login from "../apis/security/login";
import wxauth from "../apis/security/wxauth";

export const loginState = defineStore("login", {
  state: () => {
    return {
      isLoggedIn: false,
      hasJWTs: false,
      jwtToken: "" as string,
      userid: 0,
    };
  },
  actions: {
    async doLogin(username: string, password: string): Promise<boolean> {
      let success = false;
      await login(username, password).then((session) => {
        if (session.jwt != "") {
          this.isLoggedIn = true;
          success = true;
          this.jwtToken = session.jwt;
          this.userid = session.userid;
          this.save2Local();
        }
      });
      return success;
    },
    async wxLogin(code: string): Promise<boolean> {
      let success = false;
      const state = "maiqu";
      await wxauth(code, state).then((session) => {
        this.isLoggedIn = true;
        this.jwtToken = session.jwt;
        this.userid = session.userid;
        this.save2Local();
        success = true;
      });
      return success;
    },
    save2Local() {
      localStorage.clear();
      localStorage.setItem("userId", this.userid.toString());
      localStorage.setItem("jwt", this.jwtToken);
    },
    loadfromLocal() {
      if (localStorage.getItem("userId")) {
        this.userid = Number(localStorage.getItem("userId"));
        this.jwtToken = String(localStorage.getItem("jwt"));
        this.isLoggedIn = true;
      }
    },
  },
});
