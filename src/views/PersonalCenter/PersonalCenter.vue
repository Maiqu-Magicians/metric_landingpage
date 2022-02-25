<template>
  <el-row justify="space-between">
    <el-col :span="3" :xs="1"></el-col>

    <el-col :span="5" :xs="0">
      <div class="left-card">
        <div class="left-card-content">
          <div class="head-icon">
            <img :src="avtr_src" class="avtr-img" />
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

    <el-col :span="9" :xs="18">
      <router-view />
    </el-col>

    <el-col :span="3" :xs="1"></el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    this.getPath();
    this.avtr_src = "../../assets/icons8-user.svg";
  },
  data() {
    return {
      lala: "",
      avtr_src: "",
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

<style scoped lang="scss">
.avtr-img {
  position: relative;
  width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.head-icon {
  position: relative;
  width: 15vh;
  height: 15vh;
  background: rgba(255, 255, 255, 0.39);
  border-radius: 50%;
  opacity: 1;
}

.btn {
  position: relative;
  margin-top: 1vh;
  width: 189px;
  height: 62px;
  font-size: 16px;
  font-family: OPPOSans;
  font-weight: 400;
  line-height: 21px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
  text-align: center;
  &::before {
    display: inline-block;
    height: 100%;
    content: "";
    vertical-align: middle;
  }
  &:hover {
    width: 189px;
    height: 62px;
    background: rgba(65, 153, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(83, 152, 247, 0.4);
    opacity: 1;
    border-radius: 31px;

    text-decoration: none;
    text-align: center;
    color: #ffffff;
  }
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
  &::before {
    display: inline-block;
    height: 100%;
    content: "";
    vertical-align: middle;
  }
}

.left-card-content {
  position: relative;
  width: 100%;
  height: 80%;
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  margin: 20% auto;
  span {
    width: 54px;
    height: 24px;
    font-size: 18px;
    font-family: OPPOSans-M;
    font-weight: 800;
    line-height: 24px;
    color: #ffffff;
    opacity: 1;
  }
  * {
    position: relative;
    padding: 0;
    margin: 2.5vh auto;
  }
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
