<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
/* 公共导航返回按钮样式修改 */
.van-nav-bar__text {
  color: #684886 !important;
}
.van-nav-bar .van-icon {
  color: #684886 !important;
}

/* 焦点轮播图样式 */
.van-swipe__indicator--active {
  background-color: #684886 !important;
}

/* 筛选的下拉菜单 */
.van-dropdown-item__content {
  background-color: #f3f4f5 !important;
}

/* cell去掉flex */
.van-cell__value {
  flex: none !important;
}

/*  tab切换样式重置 */
.van-tabs__line {
  background-color: #684886 !important;
}
</style>
