<template>
  <product-list-view :listing="listing()" :loading="loading" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ProductListView from "../../components/ProductsListView.vue";
import { ProductStore } from "../../store/products";

const loading = ref(true);
const all_products = ProductStore();
onMounted(async () => {
  await all_products.getAll();
  loading.value = false;
});
const listing = () => {
  return all_products.productLs.filter(i => {
    return i.type == "2";
  });
};
</script>
