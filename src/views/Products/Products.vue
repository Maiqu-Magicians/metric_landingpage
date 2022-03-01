<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="1" />
    <el-col :span="21" type="flex">
      <div class="top-carousel-content fade-in-up">
        <el-carousel :interval="4000" :height="topheight" width="1000px">
          <el-carousel-item v-for="item in car" :key="item.index">
            <div
              class="medium"
              :style="{
                'background-image': 'url(' + item.backgd_url + ')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center',
                height: '100%',
                'border-radius': '4vh',
              }"
            ></div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-row :justify="productsJustify" :gutter="0">
          <el-col :span="4" :xs="0">
            <div class="menu-card fade-in-lf">
              <div class="option-btn" v-for="i of classes" :key="i.index">
                <router-link style="text-decoration: none" :to="i.route">
                  {{ i.name }}
                </router-link>
              </div>
            </div>
          </el-col>
          <el-col :span="1" :xs="0" />
          <el-col :span="19" :xs="24" class="right-content fade-in-rt">
            <router-view />
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="4" />
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AllProducts",
  data() {
    return {
      car: [
        {
          index: 0,
          backgd_url: "https://img-cdn.dustella.net/car0.webp",
        },
        {
          index: 1,
          backgd_url: "https://img-cdn.dustella.net/car1.webp",
        },
        {
          index: 2,
          backgd_url: "https://img-cdn.dustella.net/car2.webp",
        },
      ],
      classes: [
        {
          index: 1,
          name: "全部",
          route: "/products/All",
        },
        {
          index: 2,
          name: "职业能力",
          route: "/products/jobs",
        },
        {
          index: 3,
          name: "压力测试",
          route: "/products/pressure",
        },
        {
          index: 4,
          name: "性格测试",
          route: "/products/personality",
        },
      ],
    };
  },
  computed: {
    topheight() {
      return document.body.clientWidth < 1200 ? "200px" : "300px";
    },
    productsJustify() {
      return document.body.clientWidth < 1200 ? "center" : "center";
    },
  },
});
</script>

<style scoped lang="scss">
.right-content {
  height: 1000vh;
  width: 100%;
  margin: 0;
  left: 0;
  right: 0;
  // border: 1 solid #ffffff;
}
.top-carousel-content {
  height: 350px;
  margin: 2vh auto;
}

.fade-in-lf {
  animation: fade-lf;
  animation-duration: 1000ms;
}

@keyframes fade-lf {
  from {
    opacity: 0;
    transform: translate(-100%, 0%);
  }
  to {
    opacity: 1;
  }
}
.fade-in-rt {
  animation: fade-rt;
  animation-duration: 1000ms;
}

@keyframes fade-rt {
  from {
    opacity: 0;
    transform: translate(50%, 0%);
  }
  to {
    opacity: 1;
  }
}
.fade-in-up {
  animation: fade-up;
  animation-duration: 1000ms;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translate(0%, -80%);
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 1081px) {
  .top-carousel-content {
    height: 200px;
    margin: 2vh auto;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.menu-card {
  width: 100%;
  height: 40vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(100%) blur(40px);
  background-clip: content-box;
  opacity: 1;
  border-radius: 20px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.option-btn {
  display: flex;
  justify-content: center;
  // align-items: center;
  width: 100%;
  height: 8vh;
  :hover {
    width: 100%;
    // font-weight: bold;
    background: rgba(65, 153, 255, 0.4);
    text-align: center;
  }
  overflow: visible;
  a {
    color: white;
    font-size: 18px;
  }
  ::before {
    display: inline-block;
    height: 100%;
    content: "";
    vertical-align: middle;
  }
}

.router-link-exact-active {
  background: rgba(65, 153, 255, 0.89);
  width: 120%;
  text-align: center;
}

.router-link-exact-active::before {
  display: inline-block;
  height: 100%;
  content: "";
  vertical-align: middle;
}
.ele {
  color: #ffffff;
  align-items: center;
  text-align: center;
  // margin-top: 25px;
  font-size: 15px;
}

.section-card {
  color: #ffffff;
  align-items: center;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  margin: 0 5px 5px 0;
  padding-top: 120px;
}
</style>
