<template>
  <TopNavComponent></TopNavComponent>
  <SwiperComponent :images="banners" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import SwiperComponent from "@/components/SwiperComponent.vue";
import TopNavComponent from "@/components/TopNavComponent.vue";
import { getBanners } from "@/api/Home/index";

interface IImage {
  image: string;
  title: string;
  url: string;
}

const banners = ref<IImage[]>([]);
onMounted(async () => {
  const res = await getBanners();
  if (res.data.status === 200) {
    banners.value = res.data.data;
  }
});
</script>
