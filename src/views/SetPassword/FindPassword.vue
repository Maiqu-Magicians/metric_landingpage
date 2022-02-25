<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="1" />
    <el-col :span="18">
      <div class="main-card">
        <div class="home-top-text">找回我的密码</div>
        <el-row class="main-card-row" justify="space-around">
          <el-col :span="12">
            <div class="main-card-content">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item prop="tel">
                  <el-input
                    type="password"
                    style="width: 100%; height: 60px"
                    placeholder="账号绑定的手机号码"
                    v-model="ruleForm.tel"
                    show-password
                  ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    type="password"
                    style="width: 46%; height: 60px"
                    placeholder="验证码"
                    v-model="ruleForm.code"
                    show-password
                  ></el-input>
                  <el-button
                    style="
                      position: relative;
                      left: 4%;
                      width: 27%;
                      height: 60px;
                      background-color: #55585a + 7a;
                      border: 5px white;
                    "
                    round
                    @click="getCode()"
                    :disabled="totalTime < 60"
                    >{{ btn_content }}</el-button
                  >
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    style="width: 80%; height: 60px"
                    round
                    @click="submitForm()"
                    >重置密码</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="1" />
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FindPassword",
  data() {
    return {
      btn_content: "获取验证码",
      totalTime: 60,
      ruleForm: {
        tel: "",
        code: "",
      },
      rules: {
        tel: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        code: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      console.log("findPassword");
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
  },
});
</script>

<style scoped lang="scss">
.line {
  width: 0px;
  height: 30vh;
  border: 1px solid #ffffff;
  text-align: center;
  opacity: 1;
}
/* 小字的样式 */
.small-ch {
  color: #ffffff;
  height: 3vh;
  font-size: 5px;
}

.main-card {
  margin-top: 5vh;
  width: 100%;
  height: 80vh;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: saturate(100%) blur(30px);
  opacity: 1;
  border-radius: 30px 30px 0px 0px;
}

.main-card-content {
  flex: 1;
  display: flex;
  flex-flow: column;
  left: 51%;
  top: 50%;

  transform: translate(-50%, -50%);

  -webkit-transform: translate(-50%, -50%);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0 0;
}

/* 输入框样式 */
:deep(.el-input__inner) {
  height: 60px;
  width: 350px;
  border-radius: 10px;
  color: #4d1515;
  opacity: 0.5;
}
/* 按钮样式 */
:deep(.el-button__inner) {
  height: 60px;
  width: 1800px;
  color: rgb(28, 32, 255);
  opacity: 0.5;
}

.main-card-content > * {
  position: relative;
  padding: 0;
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
  height: 7vh;
  font-size: 36px;
  font-family: OPPOSans;
  font-weight: 800;
  line-height: 20vh;
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
