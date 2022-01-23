<template>
  <div>
    <Backgd />

    <!-- <el-container> -->
    <!-- <el-header> -->
    <MainHeader />
    <!-- </el-header> -->

    <!-- <el-main class="landing-main"> -->
    <router-view />
    <!-- </el-main> -->
    <!-- </el-container> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "./components/header.vue";
import Backgd from "./components/background.vue";

export default defineComponent({
  components: {
    MainHeader,
    Backgd,
  },
});
</script>

<style scoped>
.landing-main {
  height: 92vh;
}
</style>
