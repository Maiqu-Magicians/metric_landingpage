<template>
  <el-row style="height: 90vh" justify="space-around">
    <el-col :span="3" />
    <el-col :span="18">
      <div class="home-top-content fade-in">
        <div class="home-top-text">Hi~</div>
        <div class="home-top-text">我们是麦趣</div>
        <div class="home-bottom-text" style="white-space: pre-wrap">
          {{ introduction }}
        </div>
      </div>
      <div class="main-card fade-in">
        <div class="main-card-row">
          <div class="main-card-content">
            <img src="../assets/icons8-octahedron.svg" style="width: 25%" />
            <span>测评大厅</span>
            <router-link to="/products" style="width: 33%">
              <img src="../assets/btn_login.svg" style="width: 100%" />
            </router-link>
          </div>
          <div>
            <div class="line" />
          </div>
          <div class="main-card-content">
            <img src="../assets/icons8-bot.svg" style="width: 20%" />
            <span>AI咨询</span>
            <router-link to="/" style="width: 33%">
              <img src="../assets/btn_login(1).svg" style="width: 100%" />
            </router-link>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="3" />
  </el-row>
  <main-footer />
</template>

<script lang="ts" setup>
import axios from "axios";
import mainFooter from "../components/base/footer.vue";
axios.get("https://api.maiquer.tech/api/evaluation/queryAll").then((res) => {
  console.log(res.data);
});
const introduction =
  "麦趣，集游戏化行为测评GBA和AI心理轻咨询于一体，\n助力青年求职者在不确定的日子里多一些向内探索。";
</script>

<style scoped lang="scss">
.home-top-content {
  height: 30vh;
}
.line {
  width: 0px;
  height: 40vh;
  border: 1px solid #ffffff;
  opacity: 1;
  position: relative;
  left: 50%;
}

.main-card {
  width: 100%;
  height: 90vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  opacity: 1;
  border-radius: 70px 70px 0px 0px;
  overflow: hidden;
}

.fade-in {
  animation-name: card-fade-in;
  animation-duration: 1000ms;
}

.fade-out {
  animation-name: card-fade-out;
  animation-duration: 1000ms;
}

@keyframes card-fade-in {
  from {
    opacity: 0;
    transform: translate(0, 50%);
  }
  to {
    opacity: 100%;
  }
}
@keyframes card-fade-out {
  from {
    opacity: 100%;
  }
  to {
    transform: translate(0, 50%);
    opacity: 0;
  }
}

.main-card-content {
  position: relative;
  width: 30%;
  height: 40vh;
  margin-bottom: 0;
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  justify-content: center;
  margin: 0 8%;
  & > * {
    position: relative;
    padding: 0;
    margin: 2.2vh auto;
  }
  & > span {
    text-align: center;
    height: 40px;
    font-size: 4vh;
    font-family: OPPOSans;
    font-weight: 600;
    line-height: 47px;
    color: #ffffff;
    opacity: 1;
  }
}

.main-card-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 60vh;
  top: 7vh;
}

.home-top-text {
  position: relative;
  text-align: left;
  right: 0;
  height: 7vh;
  font-size: 4.3vh;
  font-family: OPPOSans-M;
  font-weight: 900;
  line-height: 13vh;
  color: #ffffff;
  opacity: 1;
}

.home-bottom-text {
  position: relative;
  text-align: left;
  top: 14%;
  height: 4vh;
  font-size: 1.9vh;
  font-family: OPPOSans-L;
  font-weight: 530;
  line-height: 3.5vh;
  color: #ffffff;
  opacity: 1;
}
@media only screen and (max-width: 980px) {
  .main-card-content {
    flex-direction: column;
  }

  .home-top-text {
    font-size: 2.9vh;
    height: 4vh;
    line-height: 7.5vh;
    text-align: center;
  }

  .home-bottom-text {
    font-size: 1.5vh;
    top: 14%;
    line-height: 2.2vh;
    text-align: center;
  }

  .home-top-content {
    height: 20vh;
  }

  .main-card-row {
    top: 1vh;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .line {
    height: 0px;
    left: 0;
    width: 50vw;
  }

  .main-card-content {
    width: 80%;
  }
  .main-card-content > span {
    width: 100%;
    height: 0%;
    line-height: 0;
    /* left: 0; */
    font-size: 3vh;
    font-family: OPPOSans-L;
  }
}
</style>
