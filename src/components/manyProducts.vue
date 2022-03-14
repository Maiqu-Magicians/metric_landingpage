<template>
  <el-scrollbar height="470px" v-loading.fullscreen.lock="isLoading">
    <div class="product-content">
      <div v-for="i of product_list()" class="product-card" :key="i.index">
        <div
          :style="{
            position: 'relative',
            margin: '0 0 0 0',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            'border-radius': '3vh',
            'background-image': 'url(' + i.backgd_url + ')',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
          }"
        >
          <div class="product-card-bottom">
            <div class="product-card-name" style="white-space: pre-wrap">
              {{ i.name }}
            </div>
            <img
              src="../assets/btn_login.svg"
              class="product-card-btn"
              style="cursor: pointer"
              @click="openn(i.target_url)"
            />
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ElLoading } from "element-plus";
import { onMounted, ref } from "vue";
import { ProductStore } from "../store/products";
const openn = (url: string) => {
  window.open(url);
};
const isLoading = ref(true);
// const loading = ElLoading.service({
//   lock: true,
//   text: "Loading",
//   background: "rgba(0, 0, 0, 0.7)",
// });
const productStore = ProductStore();
const product_list = () => {
  return productStore.productLs;
};
onMounted(async () => {
  await productStore.getAll();
  isLoading.value = false;
  // setTimeout(() => {
  //   loading.close();
  //   console.log("la");
  // }, 1000);
});
</script>

<style scoped lang="scss">
.product-content {
  position: relative;
  width: 100%;
  height: 1000%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.product-card {
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0px 0px 60px 20px;
  border-radius: 3vh;
}

.product-card-name {
  position: relative;
  margin: 10% auto;
  text-align: center;
  color: white;
  font-size: 150%;
  opacity: 1;
}

.product-card-bottom {
  position: relative;
  height: 80%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.39);
  margin: 80% 0 0 0;
}

.product-card-btn {
  position: relative;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  /* border: 1px solid; */
}
@media only screen and (max-width: 980px) {
  .product-card {
    width: 150px;
    height: 230px;
  }
  .product-card-name {
    font-size: 17px;
  }
}
</style>
