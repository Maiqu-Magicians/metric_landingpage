<template>
  <el-row style="height: 90vh" justify="space-around">
    <el-col :span="1" />
    <el-col :span="19">
      <div class="home-top-content">
        <div class="home-top-text">Hi~</div>
        <div class="home-top-text">我们是麦趣</div>
        <span class="home-bottom-text" style="white-space: pre-wrap">{{
          introduction
        }}</span>
      </div>
      <div class="main-card">
        <div class="main-card-row">
          <div class="main-card-content">
            <img src="@/assets/icons8-octahedron.svg" style="width: 30%" />
            <span>测评大厅</span>
            <router-link to="/products" style="width: 40%">
              <img src="@/assets/btn_login.svg" style="width: 100%" />
            </router-link>
          </div>
          <div>
            <div class="line" />
          </div>
          <div class="main-card-content">
            <img src="@/assets/icons8-bot.svg" style="width: 25%" />
            <span>AI咨询</span>
            <router-link to="/" style="width: 40%">
              <img src="@/assets/btn_login(1).svg" style="width: 100%" />
            </router-link>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="1" />
  </el-row>
  <main-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mainFooter from "@/components/base/footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    mainFooter,
  },
  data() {
    return {
      introduction:
        "麦趣，集游戏化行为测评GBA和AI心理轻咨询于一体，\n助力青年求职者在不确定的日子里多一些向内探索。",
    };
  },
});
</script>

<style scoped>
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
  backdrop-filter: saturate(100%) blur(40px);
  opacity: 1;
  border-radius: 70px 70px 0px 0px;
  overflow: hidden;
}

.main-card-content {
  position: relative;
  width: 30%;
  height: 40vh;
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  margin: 0 12%;
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
  /* margin: 0 auto; */
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
  right: 0;
  margin: 0 auto;
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
    line-height: 1.4vh;
    text-align: center;
  }

  .home-top-content {
    height: 20vh;
  }

  .main-card-row {
    top: 3vh;
    flex-direction: column;
    width: 100%;
    align-items: center;
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
