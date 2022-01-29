<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="1" />
    <el-col :span="20" type="flex">
      <div style="height: 36vh">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-row justify="space-around">
          <el-col :span="5" class="menu-card">
            <el-row class="tac">
              <router-link to="/mainpage">
                <div style="height: 8vh" class="ele">全部</div>
              </router-link>
            </el-row>
            <el-row class="tac">
              <router-link to="/mainpage">
                <div style="height: 8vh" class="ele">热门推荐</div>
              </router-link>
            </el-row>
            <el-row class="tac">
              <router-link to="/mainpage">
                <div style="height: 8vh" class="ele">职业能力</div>
              </router-link>
            </el-row>
            <el-row class="tac">
              <router-link to="/mainpage">
                <div style="height: 8vh" class="ele">压力测试</div>
              </router-link>
            </el-row>
            <el-row class="tac">
              <router-link to="/mainpage">
                <div style="height: 8vh" class="ele">性格测试</div>
              </router-link>
            </el-row>
            <el-row class="tac">
              <router-link to="/mainpage">
                <div style="height: 8vh" class="ele">类别</div>
              </router-link>
            </el-row>
            <el-row class="tac">
              <router-link to="/mainpage">
                <div style="height: 8vh" class="ele">类别</div>
              </router-link>
            </el-row>
          </el-col>
          <el-col :span="17" class="main-card">
            <el-col :span="5">
              <!-- url里放图片地址 -->
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                &nbsp;&nbsp;&nbsp;&nbsp;测评名称2&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                &nbsp;&nbsp;&nbsp;&nbsp;测评名称3&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                &nbsp;&nbsp;&nbsp;&nbsp;测评名称4&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="section-card" style="background-image: url()">
                麦趣游戏化测评<br />小程序<br />
                <router-link to="/mainpage" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
          </el-col>
          <el-col :span="1" />
        </el-row>
      </div>
    </el-col>
    <el-col :span="4" />
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AllProducts",
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.router-link-active {
  text-decoration: none;
}

.menu-card {
  width: 100%;
  height: 90vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(100%) blur(40px);
  opacity: 1;
  border-radius: 20px;
  overflow: hidden;
}

.tac {
  display: flex;
  justify-content: center;
  :hover {
    width: 100%;
    font-weight: bold;
    background-color: royalblue;
  }
}
.ele {
  color: #ffffff;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  text-decoration: none;
}

.section-card {
  color: #ffffff;
  align-items: center;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  margin: 5px 10px 10px 5px;
  padding-top: 120px;
}

.line {
  width: 0px;
  height: 35vh;
  border: 1px solid #ffffff;
  opacity: 1;
  position: relative;
  left: 50%;
  top: 50%;
}

.main-card {
  align-items: center;
}

.main-card-content {
  position: relative;
  width: 100%;
  /* height: 40%; */
  flex: 1;
  display: flex;
  flex-flow: column;
  left: 50%;
  top: 45%;

  transform: translate(-50%, -80%);

  /* -webkit-transform: translate(-50%, -50%); */
  overflow: hidden;
  margin: 0 auto;
  /* padding: 0 0; */
}

.main-card-content > * {
  position: relative;
  padding: 0;
  margin: 2.5vh auto;
}

.main-card-content > span {
  text-align: center;
  /* width: 130px; */
  height: 40px;
  font-size: 5vh;
  font-family: OPPOSans;
  font-weight: 600;
  line-height: 47px;
  color: #ffffff;
  opacity: 1;
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
  text-align: left;
  right: 0;
  /* margin: 0 auto; */
  height: 7vh;
  font-size: 5vh;
  font-family: OPPOSans;
  font-weight: 900;
  line-height: 13vh;
  color: #ffffff;
  opacity: 1;
}

.home-bottom-text {
  position: relative;
  text-align: left;
  right: 0;
  margin: 0 auto;
  top: 14%;
  height: 8vh;
  font-size: 2.1vh;
  font-family: OPPOSans;
  font-weight: 530;
  line-height: 6vh;
  color: #ffffff;
  opacity: 1;
}
</style>
