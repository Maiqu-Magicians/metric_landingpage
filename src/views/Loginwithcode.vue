<template>
  <double-col-card>
    <template v-slot:top-text>欢迎来到麦趣</template>

    <template v-slot:left-content>
      <button @click="pushLogin">微信登陆</button>
    </template>
    <template v-slot:right-content>
      <login-form type="loginWithCode" />
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
  data() {
    return {
      btn_content: "获取验证码",
      totalTime: 60,
      ruleForm: {
        tel: "",
        password: "",
        code: "",
      },
      rules: {
        tel: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      console.log("login");
    },
    getCode() {
      let clock = window.setInterval(() => {
        this.btn_content = this.totalTime + "s后重新发送";
        this.totalTime--;
        if (this.totalTime < 0) {
          this.totalTime = 60;
          this.btn_content = "重新发送验证码";
          window.clearInterval(clock);
        }
      }, 1000);
    },
    pushLogin() {
      this.$router.push("/login");
    },
  },
});
</script>

<style scoped lang="scss">
.line {
  position: relative;
  width: 0px;
  height: 27vh;
  left: 50%;
  border: 1px solid #ffffff;
  text-align: center;
  opacity: 1;
}
/* 小字的样式 */
.small-ch {
  position: relative;
  color: #ffffff;
  height: 3vh;
  font-size: 2.5vh;
  margin: 0 auto;
  left: 40%;
}

.main-card {
  margin-top: 7vh;
  width: 100%;
  height: 80vh;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: saturate(100%) blur(30px);
  opacity: 1;
  border-radius: 30px 30px 0px 0px;
}

.main-card-content {
  /* width: 40%; */
  /* height: 40%; */
  flex: 1;
  display: flex;
  flex-flow: column;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  -webkit-transform: translate(-50%, -50%);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0 0;
}

.main-card-content-right {
  width: 100%;
  /* height: 40%; */
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  justify-content: center;
  // align-items:flex-start;
  left: 40%;
  top: 45%;

  transform: translate(-50%, -50%);

  -webkit-transform: translate(-50%, -50%);
}

/* 输入框样式 */
::v-deep .el-input__inner {
  height: 60px;
  width: 1800px;
  border-radius: 10px;
  color: #4d1515;
  opacity: 0.5;
}
/* 按钮样式 */
::v-deep .el-button__inner {
  height: 60px;
  width: 1800px;
  color: rgb(28, 32, 255);
  opacity: 0.5;
}

.main-card-content > * {
  position: relative;
  // padding: 0;
  margin: 3vh auto;
}

.main-card-content > span {
  text-align: left;
  width: 130px;
  height: 40px;
  font-size: 30px;
  font-family: OPPOSans;
  font-weight: 600;
  line-height: 47px;
  color: #ffffff;
  opacity: 1;
}
/* 添加button样式 */
.main-card-content > button {
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

.main-card-row {
  /* display:; */
  position: absolute;
  width: 100%;
  height: 60vh;
  top: 10vh;
}

.home-top-text {
  position: relative;
  text-align: center;
  right: 0;
  /* margin: 0 auto; */
  height: 3vh;
  font-size: 4.2vh;
  font-family: OPPOSans;
  font-weight: 800;
  line-height: 15vh;
  color: #ffffff;
  opacity: 1;
}

.home-bottom-text {
  position: relative;
  text-align: left;
  right: 0;
  /* margin: 0 auto; */
  height: 4vh;
  font-size: 16px;
  font-family: OPPOSans;
  font-weight: 500;
  line-height: 6vh;
  color: #ffffff;
  opacity: 1;
}
</style>
