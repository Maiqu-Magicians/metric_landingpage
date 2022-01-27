<template>
  <div class="right-card"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Products",
  data() {
    return {};
  },
});
</script>

<style scoped>
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
