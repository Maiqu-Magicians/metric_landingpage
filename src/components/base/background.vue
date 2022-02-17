<template>
  <div class="background-top"></div>
  <div class="background-bottom"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.background-top {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 75vh;
  background: linear-gradient(
      /* to top, */ 180deg,
      rgba(70, 51, 51, 0) 0%,
      rgba(70, 51, 51, 0) 35%,
      #5398f7 70%,
      #5398f7 100%
    ),
    url("../../assets/back.webp");
  opacity: 1;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
}

.background-bottom {
  z-index: -2;
  display: block;
  position: fixed;
  top: 65vh;
  width: 100vw;
  background-color: #5398f7;
  height: 40vh;
}
</style>
