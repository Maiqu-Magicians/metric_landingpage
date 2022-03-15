<template>
  <div class="right-card">
    <div class="right-card-content">
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">用户头像</el-col>
          <el-col :span="14">
            <img :src="info.avtr_src" />
          </el-col>
          <el-col :span="4">
            <el-button type="primary" round @click="uploadAvtr">上传</el-button>
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">用户名</el-col>
          <el-col :span="14">{{ username }}</el-col>
          <el-col :span="4">
            <change-username />
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">绑定手机</el-col>
          <el-col :span="14">{{ phone }}</el-col>
          <el-col :span="4">
            <el-button type="primary" round @click="changePhone"
              >换绑</el-button
            >
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">绑定邮箱</el-col>
          <el-col :span="14">{{ email }}</el-col>
          <el-col :span="4">
            <el-button type="primary" round @click="changeEmail"
              >换绑</el-button
            >
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">绑定微信</el-col>
          <el-col :span="14">{{ wxid }}</el-col>
          <el-col :span="4">
            <el-button type="primary" round @click="changeWX">解绑</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import changeUsername from "../../components/dialogs/changeUsername.vue";

const changeWX = () => {
  console.log("changeWX");
};
const changeEmail = () => {
  console.log("changeEmail");
};
const changePhone = () => {
  console.log("changePhone");
};
const uploadAvtr = () => {
  console.log("uploadAvtr");
};
const username = ref("");
const email = ref("");
const wxid = ref("");
const phone = ref("");
const info = reactive({
  avtr_src: "" as string,
});
</script>

<style scoped>
.info-col {
  display: block;
  height: 13vh;
}
.info-title > * {
  font-size: 2.3vh;
  color: white;
  font-family: OPPOSans;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
}
</style>
