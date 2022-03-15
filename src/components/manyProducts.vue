<template>
  <el-scrollbar height="470px" v-loading.fullscreen.lock="isLoading">
    <div class="product-content">
      <div v-for="i of product_list()" class="product-card" :key="i.index">
        <div :style="{ backgroundImage: `url('${i.backgd_url}')` }">
          <div class="product-card-label">
            <div>{{ i.name }}</div>
            <img src="../assets/btn_login.svg" @click="openn(i.target_url)" />
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ProductStore } from "../store/products";
const openn = (url: string) => {
  window.open(url);
};
const isLoading = ref(true);
const productStore = ProductStore();
const product_list = () => {
  return productStore.productLs;
};
onMounted(async () => {
  await productStore.getAll();
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
$product_card_width: 200px;
.product-content {
  position: relative;
  width: 100%;
  height: 1000%;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
  @media only screen and (max-width: 980px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  }
  grid-template-rows: repeat(auto-fit, minmax(230px, 330px));
  align-items: center;
  justify-content: space-between;
  justify-self: stretch;
}

.product-card {
  position: relative;
  height: 300px;
  border-radius: 3vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  & > div {
    position: relative;
    margin: 0 0 0 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3vh;
  }
}

.product-card-label {
  position: relative;
  height: 80%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.39);
  margin: 80% 0 0 0;
  & > :first-child {
    position: relative;
    margin: 10% auto;
    text-align: center;
    color: white;
    font-size: 150%;
    @media (max-width: 980px) {
      font-size: 120%;
    }
    opacity: 1;
    white-space: pre-wrap;
  }
  & > img {
    position: relative;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
}

@media only screen and (max-width: 980px) {
  .product-card {
    // width: 150px;
    height: 230px;
  }
  .product-card-name {
    font-size: 17px;
  }
}
</style>
