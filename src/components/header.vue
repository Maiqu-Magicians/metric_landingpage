<template>
  <div class="thisheader">
    <el-row justify="center" style="height: 100%">
      <el-col :span="4" />
      <el-col :span="3">
        <div class="topbar-title">
          <router-link to="/" class="topbar-title-link"
            >麦趣 METRIC</router-link
          >
        </div>
      </el-col>
      <el-col :span="1">
        <div class="topbar-buy">
          <router-link to="/personalCenter/product" class="topbar-prd-link">
            产品
          </router-link>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="topbar-buy">
          <router-link to="/personalCenter" class="topbar-prd-link"
            >价格</router-link
          >
        </div>
      </el-col>
      <el-col :span="7" />
      <el-col :span="1">
        <router-link to="/register" style="text-decoration: none">
          <div class="btn-signup"><span>注册</span></div>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link to="/login" style="text-decoration: none">
          <div class="btn-login"><span>登录</span></div>
        </router-link>
      </el-col>
      <el-col :span="4" />
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.topbar-title-link {
  height: 10vh;
  font-size: 3vh;
  font-family: OPPOSans;
  font-weight: 800;
  line-height: 24px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
  text-align: left;
  display: block;
  line-height: 200%;
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
  padding: auto;
  margin: 0 auto;
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
  top: 1.2vh;
  width: 4vw;
  height: 3vh;
  border: 2px solid #ffffff;
  opacity: 1;
  border-radius: 25px;
  text-align: center;
}

.btn-signup > span {
  position: relative;
  margin: 0 auto;
  color: #ffffff;
  font-size: 100%;
  line-height: 30%;
  top: 17%;
}

.btn-login {
  position: relative;
  margin: 0 auto;
  top: 1.2vh;
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
  top: 17%;
  line-height: 50%;
}
</style>
