<template>
  <el-row justify="space-between">
    <el-col :span="3"></el-col>
    <el-col :span="5">
      <div class="left-card">
        <div class="left-card-content">
          <div class="head-icon">
            <img
              src="@/assets/icons8-user@2x.webp"
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
          <el-link to="/"> <div class="active-bottom"></div> </el-link>
          <el-link to="/"> </el-link>
          <el-link to="/"></el-link>
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
.left-card-content {
  position: relative;
  width: 40%;
  height: 80%;
  flex: 1;
  display: flex;
  flex-flow: column;
  left: 50%;
  top: 50%;

  transform: translate(-100%, -50%);

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
