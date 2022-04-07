<template>
  <el-scrollbar height="100%" class="content">
    <el-row justify="center">
      <el-col :span="2" />
      <el-col :span="20" type="flex">
        <el-row>
          <el-col :span="4" :xs="0">
            <div class="menu-card fade-in-lf">
              <div class="option-btn" v-for="(i, v) in classes" :key="i">
                <router-link style="" :to="i">
                  {{ v }}
                </router-link>
              </div>
            </div>
          </el-col>
          <el-col :span="1" :xs="0" />
          <el-col :span="19" :xs="24" class="right-content fade-in-rt">
            <router-view />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2" />
    </el-row>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const classes = {
  全部: "/products/All",
  自我: "/products/jobs",
  群体: "/products/pressure",
  社会: "/products/personality",
};
</script>

<style scoped lang="scss">
.content {
  position: relative;
  top: 10vh;
  overflow: visible;
}

.right-content {
  height: 1000vh;
  width: 100%;
  margin: 0;
  left: 0;
  right: 0;
}

.top-carousel-content {
  height: 350px;
  margin: 2vh auto;
  overflow: visible;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
}

.option-btn {
  display: flex;
  justify-content: center;
  // align-items: center;
  width: 100%;
  height: 8vh;
  transition: all 0.5s;

  :hover {
    width: 100%;
    // font-weight: bold;
    background: rgba(65, 153, 255, 0.4);
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  overflow: visible;

  a {
    color: white;
    font-size: 18px;
    text-decoration: none;
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
