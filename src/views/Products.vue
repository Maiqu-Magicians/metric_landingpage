<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="1" />
    <el-col :span="21" type="flex">
      <div class="top-carousel-content">
        <el-carousel :interval="4000" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item + 1 }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-row justify="space-around">
          <el-col :span="4">
            <div class="menu-card">
              <div class="option-btn" v-for="i of classes" :key="i.index">
                <router-link style="text-decoration: none" :to="i.route">
                  {{ i.name }}
                </router-link>
              </div>
            </div>
          </el-col>
          <el-col :span="1" />
          <el-col :span="18">
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
});
</script>

<style scoped lang="scss">
.top-carousel-content {
  height: 26vh;
  margin: 2vh auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  // background-image:url("C://Users//17100//Desktop//图片//琦玉老师.jpg");
  width: 1500px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.menu-card {
  width: 100%;
  height: 60vh;
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
