<template>
  <div class="thisheader">
    <el-row justify="center" style="height: 100%">
      <el-col :span="1" />
      <el-col :span="3">
        <div class="topbar-title">
          <router-link to="/" class="topbar-title-link"
            >麦趣 METRIC</router-link
          >
        </div>
      </el-col>
      <el-col :span="1">
        <div class="topbar-buy">
          <span>产品</span>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="topbar-buy">
          <span>价格</span>
        </div>
      </el-col>
      <el-col :span="13" />
      <el-col :span="1" />
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
</style>
