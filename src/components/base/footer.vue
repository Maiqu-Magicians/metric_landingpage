<template>
  <div class="main-footer">
    <el-row justify="center" style="top: 15%">
      <el-link>联系我们</el-link>
      <span style="white-space: pre-wrap"> | </span>
      <el-link>服务条款</el-link>
      <span style="white-space: pre-wrap"> | </span>
      <el-link>隐私保护指引</el-link>
    </el-row>
    <el-row justify="center" style="top: 25%">
      <span> Copyright © 2021-2022 Metric All Rights Reserved.</span>
    </el-row>
    <el-row justify="center" style="top: 30%">
      <el-link
        to="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001"
        >苏ICP备2021050657号-1</el-link
      >
    </el-row>
  </div>
</template>
<style scoped>
:deep(.el-link--inner) {
  font-size: 1.7vh;
  color: #ffffff;
  /* font-family: OPPOSans; */
  text-decoration: none;
}

span {
  font-size: 1.7vh;
  color: #ffffff;
}

@keyframes fade-in {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
.main-footer {
  position: fixed;
  z-index: 100;
  bottom: 0;
  height: 10vh;
  width: 100%;
  animation-name: fade-in;
  animation-duration: 2000ms;
  background: rgba(255, 255, 255, 0.39);
}
</style>
