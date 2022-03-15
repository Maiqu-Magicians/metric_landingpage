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
const LoginState = loginState();
const UserInfo = userInfo();
LoginState.loadfromLocal();
UserInfo.fetchInfo(LoginState.userid);
</script>

<style scoped>
.landing-main {
  height: 92vh;
}
</style>
