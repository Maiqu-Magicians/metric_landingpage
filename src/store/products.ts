import { defineStore } from "pinia";
import getAllProducts from "../apis/products/queryAllProducts";
import Product from "../entity/product";

export const manyProducts = defineStore("login", {
  state: () => {
    return {
      productLs: [] as Product[],
    };
  },
  actions: {
    async getAll(): Promise<void> {
      await getAllProducts().then((res) => {
        this.productLs = res;
      });
    },
  },
});
