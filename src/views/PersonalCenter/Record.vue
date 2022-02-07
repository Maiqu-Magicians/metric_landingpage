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
      <span class="test-title">测评记录</span>
      <div class="table">
        <tr>
          <th>测评时间</th>
          <th>测评名称</th>
          <th>测评详情</th>
        </tr>
        <tr v-for="i in test_records" :key="i">
          <td class="time-spe">{{ i.time }}</td>
          <td class="name-spe">{{ i.name }}</td>
          <td class="status-spe">{{ i.status }}</td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Record",
  mounted() {
    this.latest_test = "啦啦啦";
    this.test_records[0].name = "1name";
    this.test_records[0].time = "1970-1-1";
    this.test_records[0].status = "status";
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
  width: 90%;
  height: 80%;
  position: relative;
  margin: 0 auto;
  top: 3.5vh;
  /* border: 1px solid; */
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

.table {
  position: relative;
  top: 3vh;
  /* border: 1px solid white; */
}

.table > tr > * {
  font-size: 2.3vh;
  color: #ffffff;
  text-align: center;
  font-weight: normal;
}

.time-spe {
  width: 25%;
}

.name-spe {
  width: 60%;
}

.test-title {
  font-size: 2.5vh;
  color: #ffffff;
  position: relative;
  left: 3%;
  font-weight: bold;
}
</style>
