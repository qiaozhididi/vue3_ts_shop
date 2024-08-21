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
    <h3>相关咨询</h3>
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
  <!-- 最新商铺 -->
  <RollComponent :rollInfo="newShopInfo">
    <div class="new-shop-content" v-if="newGoodsLoading">
      <div class="new-shop-item" v-for="(item, index) in newGoods" :key="index">
        <img :src="item.image" alt="" />
        <p class="new-shop-title">{{ item.title }}</p>
        <span class="new-shop-price">{{ item.price }}元/月</span>
      </div>
    </div>
    <!-- 骨架屏组件 未加载完成时显示骨架屏 -->
    <div class="skeleton-newShop" v-else>
      <div class="skeleton-item">
        <van-skeleton-image class="image" />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
      </div>
      <div class="skeleton-item">
        <van-skeleton-image class="image" />
        <van-skeleton-paragraph />
        <van-skeleton-paragraph />
      </div>
    </div>
  </RollComponent>
  <div class="ad">
    <img src="../../assets/images/banner1.jpg" alt="" />
  </div>
  <!-- 人才库 -->
  <RollComponent :rollInfo="personInfo">
    <div class="person-content">
      <div
        class="person-item"
        v-for="(item, index) in personStore"
        :key="index"
      >
        <img :src="item.image" alt="" />
        <p>{{ item.name }}</p>
        <span>{{ item.desc }}</span>
      </div>
    </div>
  </RollComponent>

  <!-- 为你推荐 -->
  <div class="recommend-main">
    <CardComponent
      :recommendTitle="recommendTitle"
      :cardData="recommendGoods"
      v-if="recommendGoodsLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import router from "@/router";
import SwiperComponent from "@/components/SwiperComponent.vue";
import TopNavComponent from "@/components/TopNavComponent.vue";
import {
  getBanners,
  getNewGoods,
  getPersonStore,
  getRecommendgoods,
} from "@/api/Home/index";
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

/**
 * 最新商品
 */
const newGoodsLoading = ref<boolean>(false);

interface INewGoods {
  id: number;
  image: any;
  title: string;
  price: string | number;
}

const newGoods = ref<INewGoods[]>([]);

const newShopInfo = {
  title: "最新商铺",
  all: "查看全部",
};

onMounted(() => {
  getNewGoods().then((res) => {
    if (res.data.status === 200) {
      newGoodsLoading.value = true;
      newGoods.value = res.data.data;
    }
  });
});

/**
 * 人才库数据读取
 */

interface IRoll {
  title: string;
  all: string;
}

const personInfo: IRoll = reactive({
  title: "人才库",
  all: "查看全部",
});

interface IPersonStore {
  image: any;
  name: string;
  desc: string;
}

const personStore = ref<IPersonStore[]>([]);

onMounted(async () => {
  const res = await getPersonStore();
  if (res.status === 200) {
    personStore.value = res.data.data;
  }
});

/**
 * 为你推荐
 */

interface IGoods {
  id: number;
  image: any;
  title: string;
  price: string;
}

const recommendTitle = "为你推荐";
const recommendGoodsLoading = ref<boolean>(false);
const recommendGoods = ref<IGoods[]>([]);

onMounted(async () => {
  const res = await getRecommendgoods();
  if (res.status === 200) {
    recommendGoodsLoading.value = true;
    recommendGoods.value = res.data.data;
  }
});
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

/* 最新商品样式 */
.new-shop-content {
  display: flex;

  .new-shop-item {
    margin-right: 15px;

    img {
      display: block;
      width: 230px;
      height: 130px;
    }

    .new-shop-title {
      white-space: normal;
      word-break: break-word;
      font-size: 14px;
      text-align: left;
      padding: 10px;
    }

    .new-shop-price {
      display: block;
      font-size: 14px;
      width: 100%;
      text-align: left;
      padding: 10px;
      padding-top: 0px;
      color: #820085;
    }
  }
}

.skeleton-newShop {
  height: 208px;
  width: 100%;
  display: flex;

  .skeleton-item {
    margin: 10px;
    width: 230px;

    image {
      width: 230px;
    }
  }
}

/* 广告图 */
.ad {
  background: #fff;
  margin: 5px auto;

  img {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}

/* 人才库 */
.person-content {
  display: flex;

  .person-item {
    margin-left: 10px;

    img {
      width: 110px;
      height: 170px;
      border-radius: 5px;
    }

    p {
      font-size: 16px;
      margin: 5px 0;
    }

    span {
      display: block;
      font-size: 14px;
      color: #999;
      padding-bottom: 10px;
    }
  }
}
</style>
