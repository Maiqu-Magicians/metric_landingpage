<template>
  <div v-if="!isOK">正在处理登录.....</div>
  <div v-else>正在跳转......</div>
  <template></template>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { loginState } from "../../store/loginStatus";
import { userInfo } from "../../store/userInfo";

const isOK = ref(false);
const debug = ref(false);
const code = ref("");

const route = useRoute();
const router = useRouter();
const login = loginState();
const Info = userInfo();

const isWeixinBrowser = () => {
  return /MicroMessenger/i.test(window.navigator.userAgent);
};

onMounted(async () => {
  code.value = route.query.code as string;
  console.log(navigator.userAgent.toLowerCase());
  if (isWeixinBrowser()) {
    console.log(code.value);
    window.open(`https://m.maiquer.tech/oauth2?code=${code.value}`);
  } else {
    const res = await login.wxLogin(code.value);
    isOK.value = res;
    setTimeout(() => {
      Info.fetchInfo(login.userid);
      if (res && !debug.value) {
        router.push("/");
      }
    }, 1500);
  }
});
</script>
