<template>
  <div class="product-content">
    <div v-for="i of product_list" class="product-card" :key="i.index">
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
            @click="open(i.target_url)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ManyProducts",
  data() {
    return {
      product_list: [
        {
          index: 0,
          name: "测评名称1",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          index: 1,
          name: "测评名称2",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          index: 2,
          name: "测评名称3",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          index: 3,
          name: "测评名称4",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          index: 4,
          name: "测评名称5",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          index: 5,
          name: "麦趣游戏化测评",
          backgd_url: "http://",
          target_url: "http://",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.product-content {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  overflow: hidden;
}

.product-card {
  position: relative;
  width: 16%;
  height: 35%;
  margin: 3vh auto;
  //   border: 1px solid;
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
  height: 60%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.39);
  margin: 40% 0 0 0;
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
