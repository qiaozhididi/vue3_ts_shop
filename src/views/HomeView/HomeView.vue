<template>
  <TopNavComponent></TopNavComponent>
  <SwiperComponent :images="banners" />
  <div class="nav">
    <div
      class="item"
      @click="onItem(item.id)"
      v-for="(item, index) in navData"
      :key="item.id"
    >
      <img :src="item.image" alt="" />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import SwiperComponent from "@/components/SwiperComponent.vue";
import TopNavComponent from "@/components/TopNavComponent.vue";
import { getBanners } from "@/api/Home/index";
import nav1 from "../../assets/images/nav1.png";
import nav2 from "../../assets/images/nav2.png";
import nav3 from "../../assets/images/nav3.png";
import nav4 from "../../assets/images/nav4.png";
import nav5 from "../../assets/images/nav5.png";

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

/**
 * 导航静态数据
 */
const navData = [
  {
    id: 1,
    text: "转让出租",
    image: nav1,
  },
  {
    id: 2,
    text: "招聘求职",
    image: nav2,
  },
  {
    id: 3,
    text: "流行产品",
    image: nav3,
  },
  {
    id: 4,
    text: "培训课程",
    image: nav4,
  },
  {
    id: 5,
    text: "批发进货",
    image: nav5,
  },
];

/**
 * nav 点击事件
 */
const onItem = (val: number | string) => {
  console.log(val);
};
</script>
<style lang="less" scoped>
.nav {
  background: #fff;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  clear: both;

  .item {
    width: 20%;
    float: left;
    /*  text-align: center; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
    }

    span {
      display: block;
      font-size: 12px;
      margin-top: 10px;
    }
  }
}
</style>
