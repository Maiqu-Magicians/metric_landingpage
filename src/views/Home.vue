<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="4" />
    <el-col :span="15">
      <div style="height: 36vh">
        <div class="home-top-text">Hi~</div>
        <div class="home-top-text">我们是麦趣</div>
        <span class="home-bottom-text" style="white-space: pre-wrap">{{
          introduction
        }}</span>
      </div>
      <div class="main-card">
        <el-row class="main-card-row" justify="space-around">
          <el-col :span="1" />
          <el-col :span="8">
            <div class="main-card-content">
              <img src="@/assets/icons8-octahedron.svg" />
              <span>测评大厅</span>
              <router-link to="/">
                <img src="@/assets/btn_login.svg" />
              </router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div>
              <div class="line" />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="main-card-content">
              <img src="@/assets/icons8-bot.svg" />
              <span>咨询AI</span>
              <router-link to="/">
                <img src="@/assets/btn_login(1).svg" />
              </router-link>
            </div>
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
  name: "Home",
  data() {
    return {
      introduction:
        "麦趣，集游戏化行为测评GBA和AI心理轻咨询于一体，\n助力青年求职者在不确定的日子里多一些向内探索。",
    };
  },
});
</script>

<style scoped>
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
  width: 100%;
  height: 90vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(100%) blur(40px);
  opacity: 1;
  border-radius: 70px 70px 0px 0px;
  overflow: hidden;
}

.main-card-content {
  position: relative;
  width: 60%;
  /* height: 40%; */
  flex: 1;
  display: flex;
  flex-flow: column;
  left: 50%;
  top: 40%;

  transform: translate(-50%, -80%);

  /* -webkit-transform: translate(-50%, -50%); */
  overflow: hidden;
  /* margin: 0 auto; */
  /* padding: 0 0; */
}

.main-card-content > * {
  position: relative;
  padding: 0;
  margin: 2.5vh auto;
}

.main-card-content > span {
  text-align: center;
  width: 130px;
  height: 40px;
  font-size: 30px;
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
