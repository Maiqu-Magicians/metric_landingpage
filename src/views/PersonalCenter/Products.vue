<template>
  <div class="right-card">
    <div class="right-card-content">
      <div v-for="i of product_list" class="product-card" :key="i.name">
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
            <div class="product-card-name">{{ i.name }}</div>
            <img
              src="@/assets/btn_login.svg"
              class="product-card-btn"
              style="cursor: pointer"
              @click="openn(i.target_url)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Products",
  mounted() {
    this.product_list[0].backgd_url =
      "https://pic3.zhimg.com/v2-0e251bb643e6850008477dc97dac550e_r.jpg";
    this.product_list[0].target_url = "https://github.com/";
    this.product_list[1].backgd_url =
      "https://pic3.zhimg.com/v2-0e251bb643e6850008477dc97dac550e_r.jpg";
    this.product_list[1].target_url = "https://github.com/";
    this.product_list[2].backgd_url =
      "https://pic3.zhimg.com/v2-0e251bb643e6850008477dc97dac550e_r.jpg";
    this.product_list[2].target_url = "https://github.com/";
  },
  data() {
    return {
      product_list: [
        {
          name: "Product1",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          name: "Product1",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          name: "Product1",
          backgd_url: "http://",
          target_url: "http://",
        },
      ],
    };
  },
  methods: {
    openn(url: string) {
      window.open(url);
    },
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

.right-card-content {
  position: relative;
  width: 90%;
  height: 100%;
  margin: 3vh auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  /* border: 1px solid; */
}

.product-card {
  position: relative;
  width: 30%;
  height: 39%;
  margin: 3vh auto;
  border: 1px solid;
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
  height: 50%;
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
</style>
