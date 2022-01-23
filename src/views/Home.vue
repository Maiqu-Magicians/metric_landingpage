<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="1" />
    <el-col :span="18">
      <div style="height: 30vh">
        <div class="home-top-text">Hi~</div>
        <div class="home-top-text">我们是麦趣</div>
        <span class="home-bottom-text">{{ introduction }}</span>
      </div>
      <div class="main-card">
        <el-row class="main-card-row" justify="space-around">
          <el-col :span="8">
            <div class="main-card-content">
              <img src="@/assets/icons8-octahedron.webp" />
              <span>测评大厅</span>
              <router-link to="/">
                <img src="@/assets/btn_login.webp" />
              </router-link>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="line" />
          </el-col>
          <el-col :span="8">
            <div class="main-card-content">
              <img src="@/assets/icons8-bot.webp" />
              <span>咨询AI</span>
              <router-link to="/">
                <img src="@/assets/btn_login(1).webp" />
              </router-link>
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
  name: "Home",
  data() {
    return {
      introduction:
        "麦趣测评，是一款游戏化的职业竞争力在线自我测评系统，\
        服务于以大学生群体为主的青年求职者。\
        「游戏化」是麦趣测评想要重点打造的产品特质，\
        也是有别于市场常见的职业性格测试应用的差异化特征。",
    };
  },
});
</script>

<style scoped>
.line {
  width: 0px;
  height: 45vh;
  border: 1px solid #ffffff;
  opacity: 1;
}

.main-card {
  width: 100%;
  height: 60vh;
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

.main-card-content > * {
  position: relative;
  padding: 0;
  margin: 3vh auto;
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
  font-size: 36px;
  font-family: OPPOSans;
  font-weight: 800;
  line-height: 10vh;
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
