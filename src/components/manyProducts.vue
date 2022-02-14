<template>
  <el-scrollbar height="470px">
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
            <div class="product-card-name" style="white-space: pre-wrap">
              {{ i.name }}
            </div>
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
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ManyProducts",
  methods: {
    openn(url: string) {
      window.open(url);
    },
  },
  data() {
    return {
      product_list: [
        {
          index: 0,
          name: "倾听技能",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/Msw3Fx",
        },
        {
          index: 1,
          name: "恋爱人格",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/tJduAB",
        },
        {
          index: 2,
          name: "霍兰德职业兴趣",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/ah8wl8",
        },
        {
          index: 3,
          name: "职业锚",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/l34Hko",
        },
        {
          index: 4,
          name: "MBTI职业",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/cXuolF",
        },
        {
          index: 5,
          name: "谈判综合能力",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/iOhRKP",
        },
        {
          index: 6,
          name: "决策与判断能力",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/Q4Z9QL",
        },
        {
          index: 7,
          name: "合作与竞争能力",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/MNlpOJ",
        },
        {
          index: 8,
          name: "人际关系能力",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/bEm8Ag",
        },
        {
          index: 9,
          name: "创造力",
          backgd_url: "http://",
          target_url: "https://jinshuju.net/f/H6psw9",
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
  height: 1000%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  align-items: flex-start;
  //   flex-direction: column;
  justify-content: flex-start;
  //   overflow:scroll
}

.product-card {
  position: relative;
  width: 200px;
  height: 300px;
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
  height: 80%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.39);
  margin: 70% 0 0 0;
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
