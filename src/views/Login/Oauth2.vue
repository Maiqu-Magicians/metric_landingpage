<template>
  <div v-if="isOK">正在处理登录.....</div>
  <div v-else>正在跳转......</div>
  <div v-if="debug">
    <div>{{ code }}</div>
  </div>
  <template></template>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { loginState } from "../../store/loginStatus";

const isOK = ref(false);
const debug = ref(true);
const code = ref("");

const route = useRoute();
const router = useRouter();
const login = loginState();
code.value = route.query.code as string;
onMounted(async () => {
  const res = await login.wxLogin(code.value);
  if (res && !debug.value) {
    router.push("/");
  }
});
</script>
