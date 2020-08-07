<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>手写滚动条方法</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/next">
      <i class="el-icon-menu"></i>
      <span slot="title">定位Css方法</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
};
</script>
<style>
</style>
