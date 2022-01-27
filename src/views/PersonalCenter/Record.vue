<template>
  <div class="right-card-top">
    <el-row justify="center">
      <el-col :span="13">
        <div class="top-left-inner">
          <div class="latest-test-top">最近测评</div>
          <div class="latest-test-bottom">{{ latest_test }}</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="continue-btn" @click="continue_test">
          <img src="@/assets/continue.svg" />
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="right-card-bottom">
    <div class="card-bottom-content">
      <span class="test_title">测评记录</span>
      <div class="table"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Record",
  mounted() {
    this.latest_test = "啦啦啦";
  },
  data() {
    return {
      latest_test: "",
      test_records: [
        {
          name: "",
          time: "",
          status: "",
        },
      ],
    };
  },
  methods: {
    continue_test() {
      alert("continue");
    },
  },
});
</script>

<style scoped>
.card-bottom-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 80%;
  height: 80%;
  position: relative;
  margin: 0 auto;
  top: 5vh;
  border: 1px solid;
}

.right-card-top {
  top: 7vh;
  position: relative;
  width: 100%;
  height: 18vh;
  /* background: rgba(255, 255, 255, 0.19); */
  backdrop-filter: saturate(100%) blur(30px);
  background: linear-gradient(-90deg, rgba(83, 152, 247, 0) 0%, #5398f7 100%);
  opacity: 1;
  border-radius: 30px;
  overflow: hidden;
}

.right-card-bottom {
  position: relative;
  top: 12vh;
  width: 100%;
  height: 55vh;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: saturate(100%) blur(30px);
  opacity: 1;
  border-radius: 30px;
  overflow: hidden;
}

.top-left-inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  top: 2vh;
  width: 100%;
}

.latest-test-top {
  color: #ffffff;
  width: 100%;
  font-size: 2.5vh;
}
.latest-test-bottom {
  color: #ffffff;
  display: block;
  position: relative;
  top: 5vh;
  font-size: 3.5vh;
  width: 100%;
  line-height: 4vh;
}

.continue-btn {
  position: relative;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.19);
  width: 8vh;
  height: 8vh;
  top: 5vh;
  left: 5vh;
  border: 1px solid white;
  border-radius: 50%;
}

.continue-btn > img {
  position: relative;
  width: 25%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 75%);
}
</style>
