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
            <div class="btn">上传</div>
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">用户名</el-col>
          <el-col :span="14">{{ username }}</el-col>
          <el-col :span="4">
            <div class="btn">修改</div>
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">绑定手机</el-col>
          <el-col :span="14">{{ phone }}</el-col>
          <el-col :span="4">
            <div class="btn">换绑</div>
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">绑定邮箱</el-col>
          <el-col :span="14">{{ email }}</el-col>
          <el-col :span="4">
            <div class="btn">换绑</div>
          </el-col>
        </el-row>
      </div>
      <line />
      <div class="info-col">
        <el-row class="info-title" style="height: 100%" align="middle">
          <el-col :span="5">绑定微信</el-col>
          <el-col :span="14">{{ wxid }}</el-col>
          <el-col :span="4">
            <div class="btn">解绑</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    this.username = "Dustella";
    this.phone = "1111";
  },
  data() {
    return {
      avtr_src: "",
      username: "",
      email: "",
      wxid: "",
      phone: "",
      info: {
        avtr_src: "",
      },
    };
  },
});
</script>

<style scoped>
.btn {
  width: 80%;
  height: 100%;
  background: rgba(65, 153, 255, 0.39);
  opacity: 1;
  border-radius: 1vh;
  text-align: center;
  font-size: 2.3vh;
  line-height: 10+0%;
}

.info-col {
  display: block;
  height: 13vh;
  /* flex-direction: row;
  flex: 1; */
}
.info-title > * {
  font-size: 2.3vh;
  color: white;
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
