<template>
  <el-scrollbar height="90vh" @scroll="doS">
    <div class="wrapper">
      <glass-card class="descript"
        ><h1>“</h1>
        >
        <h1>麦趣-基于AI的</h1>
        <h1>扒拉扒拉扒拉</h1>
        <p>我们是</p>
        <p>助力于</p>
      </glass-card>
      <img width="300" class="img-sample" src="../assets/sample.jpg" />

      <div class="bottom">la</div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import GlassCard from "../components/GlassCard.vue";
import { ref, computed } from "vue";
const introCardX = ref(0);

const hHeight = window.innerHeight;
const cX = ref(0);

const doS = (e: { scrollTop: number }) => {
  cX.value = e.scrollTop;
};

const rateY = computed(() => {
  return cX.value / hHeight;
});

const cardPosX = computed(() => {
  return `${
    rateY.value < 3
      ? Math.min(rateY.value * 500 + 200, 1200)
      : rateY.value * 500 - 300
  }px`;
});

const imgOpacity = computed(() => {
  return 1 - rateY.value;
});

const cardOpacity = computed(() => {
  return 4 - rateY.value > 1 ? 1 : 4 - rateY.value;
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 1000vh;
}

.bottom {
  position: relative;
  top: 900vh;
}

@keyframes fade-lf-in {
  from {
    transform: translateX(50%) scale(0.8, 0.8);
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.img-sample {
  position: absolute;
  left: 400px;
  top: 200px;
  opacity: v-bind(imgOpacity);
}
.descript {
  animation: fade-lf-in 1s;
  position: absolute;
  right: v-bind(cardPosX);
  top: 30vh;
  width: 400px;
  height: 400px;
  padding: 40px;
  opacity: v-bind(cardOpacity);
  transform: scale(v-bind(cardOpacity), v-bind(cardOpacity));
  transition: all 0.1s;
  & > h1,
  p {
    // top: 20%;
    position: relative;
    text-align: left;
    margin: 0 auto;
    color: #fff;
    text-shadow: whitesmoke;
    font-family: OPPOSans;
  }
  & > h1 {
    font-size: 45px;
    text-align: left;
  }
  & > p {
    top: 10%;
    font-size: 22px;
  }
}
</style>
