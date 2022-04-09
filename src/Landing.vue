<template>
  <Backgd />
  <MainHeader />
  <router-view />
</template>

<script lang="ts" setup>
import MainHeader from "./components/base/header.vue";
import Backgd from "./components/base/background.vue";
import { loginState } from "./store/loginStatus";
import { userInfo } from "./store/userInfo";
import { useRoute } from "vue-router";

const LoginState = loginState();
const UserInfo = userInfo();

// before loading logic, redirect to wx

const isWeixinBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("micromessenger") != -1;
};
const route = useRoute();
const isAuth = (): boolean => {
  const r = route.path;
  return r.toString().search("auth") != -1;
};

if (isWeixinBrowser() && !isAuth()) {
  console.log(`This is a WX browser`);
  window.open("https://m.maiquer.tech/products");
} else {
  console.log("None WX browser");
}

LoginState.loadfromLocal();
UserInfo.fetchInfo(LoginState.userid);
</script>
