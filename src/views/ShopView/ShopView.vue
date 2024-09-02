<template>
  <TopNavComponent />
  <SwiperComponent :images="banners" />
  <ShopNavView />
  <div class="ad">
    <div class="ad-one">
      <img src="@/assets/images/ad-1.jpg" alt="" />
    </div>
    <div class="ad-tow">
      <img src="@/assets/images/ad-2.jpg" alt="" />
    </div>
  </div>
  <ShopSeckillView />
  <div class="suit">
    <img src="@/assets/images/t1.jpg" alt="" />
  </div>
  <RollComponent :rollInfo="suit">
    <div class="suit-content">
      <div class="suit-item" v-for="(item, index) in suitList" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
        <span>{{ item.price }}</span>
      </div>
    </div>
  </RollComponent>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import TopNavComponent from "@/components/TopNavComponent.vue";
import SwiperComponent from "@/components/SwiperComponent.vue";
import ShopNavView from "./ShopNavView.vue";
import ShopSeckillView from "./ShopSeckillView.vue";
import RollComponent from "@/components/RollComponent.vue";
import { getBanners } from "@/api/Home/index";
import { getSuit } from "@/api/Shop/index";

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

/**
 * 精选套装
 */
interface ISuit {
  title: string;
  all: string;
}
const suit: ISuit = reactive({
  title: "精选套装",
  all: "查看全部",
});

interface ISuitList {
  image: string;
  title: string;
  price: string;
}

const suitList = ref<ISuitList[]>([]);

onMounted(() => {
  getSuit().then((res) => {
    if (res.data.status === 200) {
      suitList.value = res.data.data;
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
      height: 80px;
    }
  }
  .ad-tow {
    img {
      width: 100%;
      height: 80px;
    }
  }
}

.suit {
  img {
    width: 100%;
  }
}

.suit-content {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  .suit-item {
    margin-right: 10px;
    width: 100px;
    img {
      width: 100px;
      height: 100px;
    }
    p {
      white-space: normal;
      word-break: break-word;
      font-size: 14px;
      text-align: left;
      margin-top: 5px;
    }
    span {
      display: block;
      text-align: left;
      font-size: 14px;
      color: #f23d52;
      margin-top: 5px;
    }
  }
}
</style>
