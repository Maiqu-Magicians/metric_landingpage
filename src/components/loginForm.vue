<template>
  <div class="mainform">
    <el-input placeholder="账号" v-model="ruleForm.userid" />

    <div v-if="type == 'login'">
      <el-input type="password" placeholder="密码" v-model="ruleForm.auth" />
    </div>
    <div v-else class="with-code">
      <el-input type="password" placeholder="验证码" v-model="ruleForm.auth" />
      <el-button
        round
        class="code-btn"
        @click="getCode()"
        :disabled="totalTime < 60"
      >
        {{ btn_content }}</el-button
      >
    </div>

    <div class="link-group">
      <el-link href="/findPassword" v-if="type == 'login'">忘记密码？</el-link>
    </div>

    <el-button type="primary" round @click="submitForm()">{{
      postBtnText
    }}</el-button>

    <div class="link-group">
      <el-link href="/loginwithcode" v-if="type != 'loginWithCode'"
        >短信验证码登陆</el-link
      >
      <el-link href="/login" v-else>账号密码登陆</el-link>
      <el-link href="/register" v-if="type != 'register'"
        >还没账号？马上注册</el-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const props = defineProps({ type: String });
// eslint-disable-next-line no-undef
const emits = defineEmits(["pushAuth"]);

const ruleForm = reactive({
  userid: "",
  auth: "",
});
const btn_content = ref("发送验证码");
const totalTime = ref(60);

const submitForm = () => {
  emits("pushAuth", ruleForm.userid, ruleForm.auth);
};
const getCode = () => {
  let clock = window.setInterval(() => {
    btn_content.value = totalTime.value + "s后重新发送";
    if (totalTime.value-- < 0) {
      totalTime.value = 60;
      btn_content.value = "重新发送验证码";
      window.clearInterval(clock);
    }
  }, 1000);
};
const postBtnText = props.type == "register" ? "注册" : "登录";
</script>

<style scoped lang="scss">
.mainform {
  position: relative;
  margin: 20% auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

/* 输入框样式 */
:deep(.el-input__inner) {
  position: relative;
  margin: 1vh auto;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  color: #4d1515;
  opacity: 0.5;
}

/* 按钮样式 */
:deep(.el-button__inner) {
  height: 60px;
  width: 100%;
  color: rgb(28, 32, 255);
  opacity: 0.5;
}
.el-button {
  height: 60px;
  width: 100%;
}
div {
  width: 100%;
}
a.el-link {
  position: relative;
  height: 3vh;
  line-height: -1.5vh;
  font-weight: bold;
  color: #ffffff;
}

.link-group {
  width: 100%;
  height: 3.5vh;
  a:nth-of-type(2) {
    float: right;
  }
}
.with-code > .el-input {
  width: 60%;
}
.code-btn {
  position: relative;
  left: 5%;
  width: 35%;
  height: 60px;
  background-color: #ebebeb;
  border: 5px white;
}
</style>
