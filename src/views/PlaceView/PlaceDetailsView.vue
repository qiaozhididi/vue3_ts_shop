<template>
  <div class="place-details-container">
    <div class="pd-header">
      <span @click="onBack" class="iconfont icon-fanhui"></span>
      <img class="img" :src="placeDetails?.image" alt="" />
      <h3 class="title">{{ placeDetails?.title }}</h3>
    </div>
    <div class="pd-body">
      <van-grid :column-num="3">
        <van-grid-item>
          <span class="pad-grid-text">租金</span>
          <span class="pad-grid-price">{{ placeDetails?.price }}元</span>
        </van-grid-item>
        <van-grid-item>
          <span class="pad-grid-text">转让费</span>
          <span class="pad-grid-price">{{ placeDetails?.afee }}</span>
        </van-grid-item>
        <van-grid-item>
          <span class="pad-grid-text">面积</span>
          <span class="pad-grid-price">{{ placeDetails?.size }}</span>
        </van-grid-item>
      </van-grid>
      <div class="pd-info">
        <div class="pd-info-header">
          <div class="title">{{ placeDetails?.location }}</div>
          <div class="map" @click="onMap">
            地图<span class="iconfont icon-jiantouyou"></span>
          </div>
        </div>
        <div class="pd-info-body">
          <div class="info-body-item">
            <div class="item-left">租赁类型：商铺转让</div>
            <div class="item-right">商铺类型：社区住宅底商</div>
          </div>
          <div class="info-body-item">
            <div class="item-left">所在楼层：一层</div>
            <div class="item-right">所在区县：石景山区</div>
          </div>
          <div class="info-body-item">
            <div class="item-left">所在环线：4-5环</div>
            <div class="item-right">所在商圈：鲁谷</div>
          </div>
        </div>
        <div class="pd-info-footer">
          <div class="btn">铺源详细信息</div>
        </div>
      </div>
      <div class="facility">
        <h3>配套设施</h3>
        <div class="facility-list">
          <div class="facility-item">
            <span class="iconfont icon-shangshui-"></span>
            <span class="title">上水</span>
          </div>
          <div class="facility-item">
            <span class="iconfont icon-xiashui"></span>
            <span class="title">下水</span>
          </div>
          <div class="facility-item">
            <span class="iconfont icon-bingxiang"></span>
            <span class="title">冰箱</span>
          </div>
          <div class="facility-item">
            <span class="iconfont icon-washer"></span>
            <span class="title">洗衣机</span>
          </div>
          <div class="facility-item">
            <span class="iconfont icon-wifiwuxianwang"></span>
            <span class="title">WIFI</span>
          </div>
        </div>
      </div>
      <div class="recommend">
        <h3>商铺推荐</h3>
        <div
          class="place-item"
          v-for="(item, index) in list"
          :key="index"
          @click="onPlaceItem(item.id)"
        >
          <img :src="item.image" alt="" />
          <div class="place-item-desc">
            <p>{{ item.title }}</p>
            <span class="descs">{{ item.descs }}</span>
            <span class="price">{{ item.price }}元/月</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-footer">
      <div class="collect">
        <span class="iconfont icon-shoucang"></span>
        <span class="collect-text">收藏</span>
      </div>
      <div class="call">
        <div class="btn">联系业主</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPlaceDetails, getPlaceList } from "@/api/Place/index";

const route = useRoute();
const router = useRouter();

const onBack = () => {
  window.history.back();
};

interface IPlaceDetails {
  id: number;
  image: string;
  title: string;
  descs: string;
  price: string;
  afee: string;
  size: string;
  location: string;
}

const placeDetails = ref<IPlaceDetails>();

onMounted(async () => {
  const res = await getPlaceDetails({ id: route.params.id });
  if (res.data.status === 200) {
    placeDetails.value = res.data.data;
  }
});

const onMap = () => {
  router.push("/placeMap");
};

interface IList {
  id: number;
  image: string;
  title: string;
  descs: string;
  price: string;
}
const list = ref<IList[]>([]);
onMounted(() => {
  getPlaceList({ page: 1 }).then((res) => {
    if (res.data.status === 200) {
      list.value = res.data.data;
    }
  });
});
</script>
<style lang="less" scoped>
.place-details-container {
  .pd-header {
    background: #fff;

    .iconfont {
      position: absolute;
      font-size: 18px;
      padding: 10px;
      font-weight: 700;
    }

    .img {
      width: 100%;
    }

    .title {
      padding: 10px;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .pd-body {
    .pad-grid-text {
      font-size: 14px;
      color: #999;
    }

    .pad-grid-price {
      font-size: 14px;
      color: #ff4444;
      margin-top: 10px;
    }

    .pd-info {
      .pd-info-header {
        display: flex;
        margin: 20px 10px;

        .title {
          flex: 1;
          text-align: left;
          font-size: 15px;
        }

        .map {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          font-size: 14px;
          color: #999;

          span {
            font-size: 12px;
            padding-left: 5px;
          }
        }
      }

      .pd-info-body {
        background: #fff;
        padding: 10px;

        .info-body-item {
          display: flex;
          margin: 10px 0;

          .item-left {
            flex: 1;
            font-size: 14px;
          }

          .item-right {
            flex: 1;
            font-size: 14px;
          }
        }
      }

      .pd-info-footer {
        background-color: #fff;
        padding: 10px 0;

        .btn {
          width: 90%;
          margin: 0 auto;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border: 1px solid #684886;
          color: #684886;
        }
      }
    }

    .facility {
      background: #fff;
      padding: 10px;
      box-sizing: border-box;
      margin-top: 10px;

      h3 {
        font-size: 15px;
      }

      .facility-list {
        display: flex;
        margin: 10px 0;

        .facility-item {
          display: flex;
          flex-direction: column;
          margin: 0 15px;
          justify-content: center;
          align-items: center;

          .iconfont {
            font-size: 30px;
          }

          .title {
            font-size: 14px;
            margin-top: 5px;
          }
        }
      }
    }

    .recommend {
      background: #fff;
      margin-top: 10px;
      padding: 10px;
      box-sizing: border-box;

      h3 {
        font-size: 15px;
      }

      .place-item {
        border-bottom: 1px solid #f3f4f5;
        padding: 10px 0;
        display: flex;

        img {
          width: 150px;
          border-radius: 5px;
        }

        .place-item-desc {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;

          p {
            font-size: 14px;
            margin: 5px 0;
          }

          .descs {
            display: block;
            font-size: 14px;
            color: #999;
            margin: 5px 0;
          }

          .price {
            display: block;
            font-size: 14px;
            color: #ff4444;
            margin: 5px 0;
          }
        }
      }
    }
  }
  .pd-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    .collect {
      flex: 1;
      .iconfont {
        display: block;
        text-align: center;
        margin-top: 5px;
        font-size: 20px;
      }
      .collect-text {
        display: block;
        text-align: center;
        margin-top: 2px;
        font-size: 14px;
      }
    }
    .call {
      flex: 3;
      padding: 0 10px;
      .btn {
        width: 100%;
        text-align: center;
        line-height: 40px;
        margin-top: 5px;
        background: #684886;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>
