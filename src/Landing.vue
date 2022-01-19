<template>
  <el-container>
    <el-header>
      <el-row justify="end">
        <el-col :span="8">
          <div class="topbar-title">
            <span
              style="
                color: green;
                font-size: 28px;
                font-family: Microsoft YaHei;
              "
              >麦趣测评</span
            >
          </div>
        </el-col>
        <el-col :span="8" />
        <el-col :span="8">
          <el-link>
            <router-link to="/">Home</router-link>
          </el-link>
          |
          <router-link to="/about">About</router-link>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss"></style>
