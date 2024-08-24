<template>
  <TopNavComponent />
  <SwiperComponent :images="banners" />
  <ShopNavView />
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import TopNavComponent from "@/components/TopNavComponent.vue";
import SwiperComponent from "@/components/SwiperComponent.vue";
import ShopNavView from "./ShopNavView.vue";
import { getBanners } from "@/api/Home/index";

//Banner
interface IBanner {
  image: string;
  title: string;
  url: string;
}

const banners = ref<IBanner[]>([]);

onMounted(() => {
  getBanners().then((res) => {
    if (res.data.status === 200) {
      banners.value = res.data.data;
    }
  });
});
</script>
<style scoped></style>
