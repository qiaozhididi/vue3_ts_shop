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
  <div class="gap">
    <ItemView :image="false" :item="item" />
  </div>
  <div class="comment-container">
    <div class="comment">
      <div class="comment-header">
        <div class="title">用户评价(999+)</div>
        <div class="percent">
          <span class="text-desc">98%好评</span>
          <span class="iconfont icon-jiantouyou"></span>
        </div>
      </div>
    </div>
    <CommentView
      :comment="item"
      v-for="(item, index) in comment"
      :key="index"
    />
    <div class="more" @click="onListMore">
      <div>查看更多</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getGoodsDetails, getGoodsComment } from "@/api/Goods/index";
import GoodsDetailsHeader from "@/components/PubHeaderComponent.vue";
import ItemView from "./components/ItemView.vue";
import CommentView from "./components/CommentView.vue";

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

/**
 * 规格
 */
const item = {
  text: "选择规格",
  desc: "",
};

/**
 * 获取商品评价
 */

const comment = ref([]);

onMounted(async () => {
  const res = await getGoodsComment({ id: route.params.id });
  if (res.data.status == 200) {
    comment.value = res.data.data;
  }
});

const onListMore = () => {
  router.push("/commentList");
};
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

.gap {
  margin: 5px 0;
}

.comment {
  background: #fff;
  border-bottom: 1px solid #f3f4f5;

  .comment-header {
    padding: 10px;
    display: flex;

    .title {
      flex: 1;
      font-size: 14px;
      text-align: left;
    }

    .percent {
      flex: 1;
      text-align: right;
      color: #999;

      .text-desc {
        font-size: 12px;
      }

      .iconfont {
        font-size: 12px;
      }
    }
  }
}
</style>
