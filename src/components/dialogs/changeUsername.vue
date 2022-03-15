<template>
  <el-button type="primary" round @click="mdopen = true">修改</el-button>
  <teleport to="body">
    <transition name="fade">
      <div class="modal" v-if="mdopen">
        <div>
          <div class="close" @click="mdopen = false"></div>
          <span>修改用户名</span>
          <el-input v-model="username"></el-input>
          <el-button type="primary" style="width: 80%; height: 60px" round
            >确定</el-button
          >
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "changeUsername",
  data() {
    return { mdopen: false, username: "" };
  },
});
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div > span {
    width: 180px;
    height: 47px;
    font-size: 36px;
    font-family: OPPOSans-M;
    font-weight: 800;
    line-height: 47px;
    color: #ffffff;
    opacity: 1;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    width: 650px;
    height: 392px;
    background: rgba(119, 182, 255, 0.39);
    backdrop-filter: saturate(0%) blur(40px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    opacity: 1;
    border-radius: 10px;
  }
}

:deep(.el-input__inner) {
  position: relative;
  margin: 0% auto 0%;
  height: 60px;
  width: 80%;
  border-radius: 20px;
  color: #4d1515;
  opacity: 0.5;
}
/* 按钮样式 */
:deep(.el-button__inner) {
  height: 60px;
  width: 80%;
  color: rgb(28, 32, 255);
  opacity: 0.5;
}
.close {
  color: white;
  border-radius: 12px;
  line-height: 20px;
  text-align: right;
  height: 20px;
  width: 100%;
  font-size: 18px;
  padding: 1px;
  position: relative;
  top: 10px;
  right: 10px;
  opacity: 0.7;
}
.close:hover {
  opacity: 1;
}
/* use cross as close button */
.close::before {
  content: "\2716";
}
</style>
