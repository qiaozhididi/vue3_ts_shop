<template>
  <GoodsDetailsHeader :title="title" />
  <div class="details-container">
    <div class="dc-goods">
      <img class="goods-image" :src="goodsDetails?.image" alt="" />
      <p class="goods-title">{{ goodsDetails?.title }}</p>
      <p>
        <span class="goods-price">￥{{ goodsDetails?.price }}.00</span
        ><span class="goods-price-old">￥500</span>
      </p>
    </div>
    <div class="other">
      <span class="s1">快递：免邮费</span>
      <span class="s2">好评率：99%</span>
      <span class="s3">销量：3000</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getGoodsDetails } from "../../api/Goods/index";
import GoodsDetailsHeader from "../../components/PubHeaderComponent.vue";

const route = useRoute();
const router = useRouter();

const title = "商品详情";

interface IGoods {
  id: number;
  image: any;
  title: string;
  price: string;
}

const goodsDetails = ref<IGoods>();

onMounted(async () => {
  var res = await getGoodsDetails({ id: route.params.id });
  if (res.status === 200) {
    goodsDetails.value = res.data.data;
  }
});
</script>
<style lang="less" scoped>
.details-container {
  .dc-goods {
    background: #fff;

    .goods-image {
      width: 100%;
    }

    .goods-title {
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;
    }

    p {
      padding-bottom: 10px;

      .goods-price {
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
        color: #f23d52;
      }

      .goods-price-old {
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
      }
    }
  }

  .other {
    background: #fff;
    display: flex;
    padding: 10px;

    span {
      flex: 1;
      font-size: 12px;
      color: #999;
    }

    .s1 {
      text-align: left;
    }

    .s2 {
      text-align: center;
    }

    .s3 {
      text-align: right;
    }
  }
}
</style>
