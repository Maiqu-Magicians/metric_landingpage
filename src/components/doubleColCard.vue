<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="1" />
    <el-col :span="18">
      <div class="main-card">
        <div><slot name="top-text"></slot></div>
        <el-row class="main-card-row" justify="space-around">
          <el-col :span="1" :xs="0" />
          <el-col :span="8" :xs="0">
            <div class="main-card-content">
              <slot name="left-content"></slot>
            </div>
          </el-col>
          <el-col :span="2" :xs="0">
            <div class="line" />
            <span class="small-ch">或</span>
            <div class="line" />
          </el-col>
          <el-col :span="8" :xs="24">
            <div class="main-card-content-right">
              <slot name="right-content"></slot>
            </div>
          </el-col>
          <el-col :span="1" :xs="0" />
        </el-row>
      </div>
    </el-col>
    <el-col :span="1" />
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "double-col-card",
});
</script>

<style scoped lang="scss">
.line {
  position: relative;
  width: 0px;
  height: 27vh;
  left: 50%;
  border: 1px solid #ffffff;
  text-align: center;
  opacity: 1;
}
/* 小字的样式 */
.small-ch {
  position: relative;
  color: #ffffff;
  height: 3vh;
  font-size: 2.5vh;
  margin: 0 auto;
  left: 40%;
}

.main-card {
  margin-top: 7vh;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: saturate(100%) blur(30px);
  opacity: 1;
  border-radius: 30px 30px 0px 0px;
  animation-name: card-fade-in;
  animation-duration: 1s;
  & > :first-child {
    position: relative;
    text-align: center;
    right: 0;
    /* margin: 0 auto; */
    height: 3vh;
    font-size: 4.2vh;
    font-family: OPPOSans-M;
    font-weight: 800;
    line-height: 15vh;
    color: #ffffff;
    opacity: 1;
  }
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

.main-card-content-right {
  width: 100%;
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}
.main-card-content {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin: 40% auto;
  & > * {
    position: relative;
    // padding: 0;
    margin: 3vh auto;
  }
  & > span {
    text-align: left;
    width: 130px;
    height: 40px;
    font-size: 30px;
    font-family: OPPOSans;
    font-weight: 600;
    line-height: 47px;
    color: #ffffff;
    opacity: 1;
  }
  & > button {
    width: 200px;
    height: 50px;
    background: linear-gradient(180deg, #2eee9f 0%, #00b368 100%);
    box-shadow: 0rpx 20rpx 60rpx rgba(24, 181, 112, 0.6);
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 20px;
    color: #ffffff;
    border-radius: 40px;
    border: none;
    margin-top: 30px;
    &:active {
      margin-top: 28px;
      background: linear-gradient(180deg, #04b46b 0%, #1cd187 80%);
    }
  }
}

/* 输入框样式 */

/* 添加button样式 */
.main-card-row {
  /* display:; */
  position: absolute;
  width: 100%;
  height: 60vh;
  top: 10vh;
  position: relative;
  top: 15vh;
}
</style>
