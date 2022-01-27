<template>
  <el-row justify="space-between">
    <el-col :span="3"></el-col>
    <el-col :span="5">
      <div class="left-card">
        <div class="left-card-content">
          <div class="head-icon">
            <img
              src="@/assets/icons8-user.svg"
              style="
                position: relative;
                width: 30%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
              "
            />
          </div>
          <span>用户名</span>
          <router-link to="/personalCenter/info" class="btn"
            >账号信息</router-link
          >
          <router-link to="/personalCenter/records" class="btn"
            >测评记录</router-link
          >
          <router-link to="/personalCenter/products" class="btn"
            >已购产品</router-link
          >
        </div>
      </div>
    </el-col>
    <el-col :span="9">
      <router-view />
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    this.getPath();
  },
  data() {
    return {
      lala: "",
    };
  },
  methods: {
    getPath() {
      var ppp = this.$route.path;
      console.log(ppp);
    },
  },
});
</script>

<style scoped>
.active-bottom {
  width: 189px;
  height: 62px;
  background: rgba(65, 153, 255, 0.39);
  box-shadow: 0px 10px 20px rgba(83, 152, 247, 0.4);
  opacity: 1;
  border-radius: 31px;
}

.head-icon {
  position: relative;
  width: 15vh;
  height: 15vh;
  background: rgba(255, 255, 255, 0.39);
  border-radius: 50%;
  /* filter: blur(30px); */
  opacity: 1;
}

.btn {
  width: 64px;
  height: 21px;
  font-size: 16px;
  font-family: OPPOSans;
  font-weight: 400;
  line-height: 21px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}

.btn::before {
  display: inline-block;
  height: 100%;
  content: "";
  vertical-align: middle;
}

.router-link-exact-active {
  width: 189px;
  height: 62px;
  background: rgba(65, 153, 255, 0.39);
  box-shadow: 0px 10px 20px rgba(83, 152, 247, 0.4);
  opacity: 1;
  border-radius: 31px;

  text-decoration: none;
  text-align: center;
  color: #ffffff;
  /* line-height: %; */
}

.router-link-exact-active::before {
  display: inline-block;
  height: 100%;
  content: "";
  vertical-align: middle;
}

.left-card-content > * {
  position: relative;
  padding: 0;
  margin: 2.5vh auto;
}

.left-card-content > span {
  width: 54px;
  height: 24px;
  font-size: 18px;
  font-family: OPPOSans;
  font-weight: 800;
  line-height: 24px;
  color: #ffffff;
  opacity: 1;
}

.left-card-content {
  position: relative;
  width: 100%;
  height: 80%;
  flex: 1;
  display: flex;
  flex-flow: column;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  /* -webkit-transform: translate(-50%, -50%); */
  overflow: hidden;
  margin: 0 auto;
  /* padding: 0 0; */
}

.left-card {
  top: 7vh;
  position: relative;
  width: 100%;
  height: 78vh;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: saturate(100%) blur(30px);
  opacity: 1;
  border-radius: 30px;
  overflow: hidden;
}

.right-card {
  top: 7vh;
  position: relative;
  width: 100%;
  height: 78vh;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: saturate(100%) blur(30px);
  opacity: 1;
  border-radius: 30px;
  overflow: hidden;
}
</style>
