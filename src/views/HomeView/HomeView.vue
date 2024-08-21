<template>
  <TopNavComponent></TopNavComponent>
  <SwiperComponent :images="banners" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import SwiperComponent from "@/components/SwiperComponent.vue";
import TopNavComponent from "@/components/TopNavComponent.vue";
import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";
import banner3 from "@/assets/images/banner3.jpg";

interface IImage {
  image: string;
  title: string;
  url: string;
}

const banners = ref<IImage[]>([]);
banners.value.push({
  image: banner1,
  title: "首页轮播图",
  url: "1",
});
banners.value.push({
  image: banner2,
  title: "首页轮播图",
  url: "1",
});
banners.value.push({
  image: banner3,
  title: "首页轮播图",
  url: "1",
});
</script>
