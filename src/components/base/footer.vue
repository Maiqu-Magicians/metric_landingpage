<template>
  <div class="main-footer">
    <el-row justify="center" style="top: 30%">
      <el-link>联系我们</el-link>
      <span style="white-space: pre-wrap"> | </span>
      <el-link>服务条款</el-link>
      <span style="white-space: pre-wrap"> | </span>
      <el-link>隐私保护指引</el-link>
    </el-row>
    <el-row justify="center" style="top: 40%">
      <span> Copyright © 2021-2022 Metric All Rights Reserved.</span>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "footer",
});
</script>

<style scoped>
:deep(.el-link--inner) {
  font-size: 1.7vh;
  color: #ffffff;
  font-family: OPPOSans;
}

span {
  font-size: 1.7vh;
  color: #ffffff;
}
.main-footer {
  position: fixed;
  z-index: 100;
  bottom: 0;
  height: 10vh;
  width: 100%;

  background: rgba(255, 255, 255, 0.39);
}
</style>
