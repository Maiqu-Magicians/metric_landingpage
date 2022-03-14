<template>
  <div class="thisheader">
    <el-row justify="center" style="height: 100%">
      <el-col :span="3" :xs="1" />
      <el-col :span="3" :xs="14">
        <div class="topbar-title">
          <router-link to="/" class="topbar-title-link"
            >麦趣 MyMetric</router-link
          >
        </div>
      </el-col>
      <el-col :span="1" :xs="0">
        <div class="topbar-buy hidden-md-and-down">
          <router-link to="/products" class="topbar-prd-link">
            产品
          </router-link>
        </div>
      </el-col>
      <el-col :span="1" :xs="0">
        <div class="topbar-buy hidden-md-and-down">
          <router-link to="/personalCenter/info" class="topbar-prd-link"
            >价格</router-link
          >
        </div>
      </el-col>
      <el-col :span="10" :xs="0" />
      <el-col :span="3" :xs="8" v-if="!isLoggedIn()">
        <el-button
          type="default"
          round
          size="large"
          style="transform: translate(0, 15%)"
          @click="pushRegister()"
          >注册</el-button
        >
        <el-button
          type="primary"
          round
          size="large"
          style="transform: translate(0, 15%)"
          @click="pushLogin()"
          >登录</el-button
        >
      </el-col>
      <el-col :span="3" :xs="7" v-else>
        <div>
          <el-avatar
            :size="25"
            :src="avtr_src"
            class="avtr"
            @click="pushCenter"
          ></el-avatar>
        </div>
      </el-col>
      <el-col :span="3" :xs="1" />
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { loginState } from "../../store/loginStatus";

const loginStore = loginState();
const router = useRouter()

const pushLogin = () => {
  router.push("/login");
};
const pushRegister = () => {
  router.push("/register");
};
const pushCenter = () => {
  router.push("/personalCenter/info");
};
const isLoggedIn = () => {
  return loginStore.isLoggedIn;
};
const isBackState = false;
const avtr_src =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
console.log(isLoggedIn());
</script>

<style scoped lang="scss">
.avtr {
  position: relative;
  transform: translate(-50%, 50%);
  float: right;
  &:hover {
    opacity: 0.7;
  }
}

.topbar-title-link {
  height: 7vh;
  font-size: 2.7vh;
  font-family: OPPOSans;
  font-weight: 800;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
  text-align: left;
  display: block;
  line-height: 5.3vh;
}
.topbar-prd-link {
  height: 10vh;
  font-size: 2.5vh;
  font-family: OPPOSans;
  font-weight: 600;
  line-height: 2vh;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
  text-align: center;
  display: block;
  line-height: 230%;
}

.topbar-title {
  position: relative;
  height: 7vh;
}

.topbar-buy {
  position: relative;
  padding: auto;
  margin: 0 auto;
}

.topbar-buy > span {
  height: 6vh;
  font-size: 2.3vh;
  font-family: OPPOSans;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  display: block;
  line-height: 270%;
}
.thisheader {
  height: 6vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.39);
  backdrop-filter: saturate(100%) blur(20px);
}
</style>
