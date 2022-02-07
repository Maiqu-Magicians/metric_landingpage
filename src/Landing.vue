<template>
  <Backgd />
  <MainHeader />
  <!-- <router-view v-slot="{ Component }"> -->
  <transition name="fade" mode="out-in">
    <router-view />
    <!-- <component :is="Component" /> -->
  </transition>
  <!-- </router-view> -->
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
.fade-enter-from {
  opacity: 0;
  /* backdrop-filter: saturate(100%) blur(30px); */
}
.fade-leave-to {
  opacity: 0;
  /* backdrop-filter: saturate(100%) blur(30px); */
}
.fade-enter-active {
  transition: opacity 0.5s ease;
  /* backdrop-filter: saturate(100%) blur(30px); */
}
.fade-leave-active {
  transition: opacity 0.5s ease;
  /* backdrop-filter: saturate(100%) blur(30px); */
}

.fade-enter-to {
  opacity: 1;
}
</style>
