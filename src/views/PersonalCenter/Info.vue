<template>
  <div class="right-card">
    <div class="right-card-content">
      <div class="info-col">
        <span class="info-title">用户头像</span>
      </div>
      <line />
      <div class="info-col">
        <span class="info-title">用户名</span>
      </div>
      <line />
      <div class="info-col">
        <span class="info-title">绑定手机</span>
      </div>
      <line />
      <div class="info-col">
        <span class="info-title">登录密码</span>
      </div>
      <line />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.info-col {
  height: 10vh;
  display: flex;
  flex-direction: row;
  flex: 1;
}

.right-card-content {
  position: relative;
  margin: 10% 10% 10% 10%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

line {
  width: 100%;
  height: 0px;
  border: 1px solid #ffffff;
  opacity: 0.7;
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
