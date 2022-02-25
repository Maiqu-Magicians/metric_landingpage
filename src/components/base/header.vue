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
      <el-col :span="3" :xs="8" v-if="!isLoggedIn">
        <el-button
          type="default"
          round
          size="large"
          style="transform: translate(0, -50%)"
          @click="pushRegister"
          >注册</el-button
        >
        <el-button
          type="primary"
          round
          size="large"
          style="transform: translate(0, -50%)"
          @click="pushLogin"
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    pushLogin() {
      this.$router.push("/login");
    },
    pushRegister() {
      this.$router.push("/register");
    },
    pushCenter() {
      this.$router.push("/personalCenter/info");
    },
  },
  data() {
    return {
      isLoggedIn: true,
      isBackState: false,
      avtr_src:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
});
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

.btn-signup {
  position: relative;
  margin: 0 auto;
  width: 4vw;
  transform: translate(-50%, -50%);
  height: 3vh;
  border: 2px solid #ffffff;
  opacity: 1;
  border-radius: 25px;
  text-align: center;
}

.btn-signup > span {
  position: relative;
  color: #ffffff;
  font-size: 100%;
}

.btn-signup > span::before {
  display: inline-block;
  height: 100%;
  content: "";
  vertical-align: middle;
}

.btn-login {
  position: relative;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  width: 4vw;
  height: 3vh;
  background-color: rgba(65, 153, 255, 0.39);
  border: 2px rgba(65, 153, 255, 0.39);
  opacity: 1;
  border-radius: 25px;
  text-align: center;
  opacity: 1;
}

.btn-login > span {
  position: relative;
  margin: 0 auto;
  color: #ffffff;
  font-size: 100%;
  /* top: 17%; */
  /* line-height: 50%; */
}
.btn-login > span::before {
  display: inline-block;
  height: 100%;
  content: "";
  vertical-align: middle;
}
</style>
