<template>
  <Backgd />
  <MainHeader />
  <router-view />
</template>

<script lang="ts" setup>
import MainHeader from "./components/base/header.vue";
import Backgd from "./components/base/background.vue";
</script>

<style scoped>
.landing-main {
  height: 92vh;
}
</style>
