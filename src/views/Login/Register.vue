<template>
  <double-col-card>
    <template v-slot:top-text>你好呀 新朋友</template>
    <template v-slot:left-content>
      <button @click="pushLogin">微信登陆</button>
    </template>
    <template v-slot:right-content>
      <login-form type="register" />
    </template>
  </double-col-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import doubleColCard from "@/components/doubleColCard.vue";
import loginForm from "@/components/loginForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    doubleColCard,
    loginForm,
  },
  methods: {
    pushLogin() {
      this.$router.push("/login");
    },
  },
});
</script>

<style scoped lang="scss">
.main-card-content > button {
  // 微信登录btn样式
  width: 200px;
  height: 50px;
  background: linear-gradient(180deg, #2eee9f 0%, #00b368 100%);
  box-shadow: 0rpx 20rpx 60rpx rgba(24, 181, 112, 0.6);
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  border-radius: 40px;
  border: none;
  margin-top: 30px;
  &:active {
    margin-top: 28px;
    background: linear-gradient(180deg, #04b46b 0%, #1cd187 80%);
  }
}
</style>
