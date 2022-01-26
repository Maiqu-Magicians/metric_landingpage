<template>
  <Backgd />
  <MainHeader />
  <router-view />\
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
