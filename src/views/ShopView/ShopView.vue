<template>
  <TopNavComponent />
  <SwiperComponent :images="banners" />
  <ShopNavView />
  <div class="ad">
    <div class="ad-one">
      <img src="../../assets/images/ad-1.jpg" alt="" />
    </div>
    <div class="ad-tow">
      <img src="../../assets/images/ad-2.jpg" alt="" />
    </div>
  </div>
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
<style lang="less" scoped>
.ad {
  width: 100%;
  height: 100px;
  display: flex;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  overflow: hidden;
  .ad-one {
    img {
      width: 100%;
    }
  }
  .ad-tow {
    img {
      width: 100%;
    }
  }
}
</style>
