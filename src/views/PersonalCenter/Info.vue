<template>
  <div class="right-card">
    <div class="right-card-content">
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5" :xs="18">用户头像</el-col>
          <el-col :span="14" :xs="0">
            <img width="50" :src="info().avtr_url" />
          </el-col>
          <el-col :span="4" :xs="6">
            <el-button type="primary" round @click="uploadAvtr">上传</el-button>
          </el-col>
        </el-row>
      </div>
      <div v-for="i of cols" :key="i.index">
        <div class="line" />
        <div class="info-col">
          <el-row class="info-title" style="height: 100%" align="middle">
            <el-col :span="5">{{ i.lf }}</el-col>
            <el-col :span="14">{{ i.rf }}</el-col>
            <el-col :span="4">
              <component :is="i.component" />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import changeUsername from "../../components/dialogs/changeUsername.vue";
import { userInfo } from "../../store/userInfo";

const UserInfo = userInfo();

const info = () => {
  return UserInfo.userInfo;
};

const cols = [
  {
    index: 0,
    lf: "用户名",
    rf: info().name,
    component: changeUsername,
  },
  {
    index: 1,
    lf: "绑定手机",
    rf: info().phone,
    component: {
      template:
        "<el-button type='primary' round @click='changePhone'>换绑</el-button>",
    },
  },
  {
    index: 2,
    lf: "绑定微信",
    rf: info().phone,
    component: {
      template:
        "<el-button type='primary' round @click='changePhone'>换绑</el-button>",
    },
  },
];

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
</script>

<style scoped lang="scss">
.info-col {
  display: block;
  height: 13vh;
}
.info-title > * {
  font-size: 2.3vh;
  color: white;
  font-family: OPPOSans-M;
}

.right-card-content {
  position: relative;
  margin: 10% 10% 10% 10%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.line {
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

:deep(.el-button) {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  & > :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
