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
  <div class="info" @click="onBeautyInfo">
    <h3>美甲咨询</h3>
    <p>年会不能错过的款，美呆了~</p>
    <span class="iconfont icon-jiantouyou"></span>
  </div>
  <div class="recommend">
    <div class="hot">
      <h3>热门活动</h3>
    </div>
    <div class="opt">
      <h3>优选店铺</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import router from "@/router";
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

/**
 * 美甲咨询详情页跳转
 */
const onBeautyInfo = () => {
  router.push("/beauty");
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
.info {
  background: #fff;
  display: flex;
  padding: 10px 0;
  align-items: center;
  border-top: 1px solid #f3f4f5;

  h3 {
    font-size: 14px;
    color: #999;
    font-weight: 400;
    padding: 0 20px;
    border-right: 1px solid #f3f4f5;
  }

  p {
    font-size: 14px;
    margin-left: 10px;
  }

  span {
    flex: 1;
    text-align: right;
    padding-right: 10px;
  }
}
.recommend {
  width: 100%;
  background-color: #fff;
  margin-top: 5px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;

  div {
    flex: 1;
    height: 80px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hot {
    background: url("../../assets/images/home-cb1.png");
    background-position: center;
    background-size: cover;
    margin-right: 5px;
  }

  .opt {
    background: url("../../assets/images/home-cb2.png");
    background-position: center;
    background-size: cover;
    margin-left: 5px;
  }
}
</style>
