<template>
  <el-row style="height: 90vh" justify="center">
    <el-col :span="1" />
    <el-col :span="21" type="flex">
      <div style="height: 26vh">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item + 1 }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row style="height: 6vh" />
      <div>
        <el-row justify="space-around">
          <el-col :span="5" class="menu-card">
            <el-row style="height: 5vh"></el-row>
            <el-row class="tac" v-for="i of items" :key="i.name">
              <router-link style="text-decoration: none" to="/mainpage">
                <div style="height: 6vh" class="ele">{{ i }}</div>
              </router-link>
            </el-row>
          </el-col>
          <el-col :span="19" class="main-card">
            <el-col :span="5" v-for="i of product_list" :key="i.name">
              <div
                class="section-card"
                style="background-image: url( {{ i.backgd_url }} )"
              >
                {{ i.name }}
                <router-link to="{{i.target_url}}" style="width: 40%">
                  <img src="@/assets/btn_login.svg" style="width: 60%" />
                </router-link>
              </div>
            </el-col>
          </el-col>
          <el-col :span="1" />
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
      product_list: [
        {
          name: "测评名称1",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          name: "测评名称2",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          name: "测评名称3",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          name: "测评名称4",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          name: "测评名称5",
          backgd_url: "http://",
          target_url: "http://",
        },
        {
          name: "麦趣游戏化测评小程序",
          backgd_url: "http://",
          target_url: "http://",
        },
      ],
      items: ["全部", "职业能力", "压力测试", "性格测试", "类别", "类别"],
    };
  },
});
</script>

<style scoped lang="scss">
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
  height: 90vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(100%) blur(40px);
  background-clip: content-box;
  opacity: 1;
  border-radius: 20px;
  overflow: hidden;
}

.tac {
  display: flex;
  justify-content: center;
  :hover {
    width: 100%;
    font-weight: bold;
    background-color: royalblue;
  }
}
.ele {
  color: #ffffff;
  align-items: center;
  text-align: center;
  margin-top: 25px;
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
