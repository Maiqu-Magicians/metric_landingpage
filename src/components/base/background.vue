<template>
  <div class="background-top"></div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
const deg = ref(135);
const degg = computed(() => {
  return `${deg.value}deg`;
});
setInterval(() => {
  deg.value++;
}, 70);
</script>

<style lang="scss" scoped>
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.background-top {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: #8bc6ec;
  //background: #8e9eab;  /* fallback for old browsers */
  //background: -webkit-linear-gradient(v-bind(degg), #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(v-bind(degg), #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  //background: #abbaab;  /* fallback for old browsers */
  //background: -webkit-linear-gradient(to right, #ffffff, #abbaab);  /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to right, #ffffff, #abbaab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-image: linear-gradient(v-bind(degg), #8bc6ec 0%, #9599e2 100%);
  animation-name: fade;
  animation-duration: 2s;
  /* url("../../assets/back.webp"); */
  opacity: 1;
  transition: all 0.5s;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
}
</style>
