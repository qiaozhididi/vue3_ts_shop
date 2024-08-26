<template>
  <PayHeader title="支付页面" />
  <div class="goods">
    <div class="image">
      <img :src="goodsDetails?.image" alt="" />
    </div>
    <div class="text">
      <h3>{{ goodsDetails?.title }}</h3>
      <div>
        <span class="price">￥{{ goodsDetails?.price }}</span>
        <span class="num">x1</span>
      </div>
    </div>
  </div>
  <ItemView :item="item1" :right="true" />
  <ItemView :image="true" :item="item2" />
  <ItemView :item="item3" />
  <ItemView :item="item4" />
  <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit" />
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, computed, nextTick } from "vue";
import { useRoute } from "vue-router";
import PayHeader from "@/components/PubHeaderComponent.vue";
import { getGoodsDetails } from "@/api/Goods/index";
import ItemView from "./components/ItemView.vue";
import alipay from "@/assets/images/alipay.png";

const route = useRoute();

interface IGoods {
  id: number;
  image: string;
  price: string;
  title: string;
}

const goodsDetails = ref<IGoods>();

onMounted(async () => {
  const res = await getGoodsDetails({ id: route.params.id });
  if (res.data.status === 200) {
    goodsDetails.value = res.data.data;
    item1.desc = res.data.data.price;
  }
});

const item1 = reactive<{
  text: string;
  desc: string | undefined;
}>({
  text: "支付金额",
  desc: "",
});

const item2 = {
  text: "支付方式",
  image: alipay,
};

const item3 = {
  text: "使用优惠券",
  desc: "",
};

const item4 = {
  text: "使用积分折现",
  desc: "",
};

/**
 * 计算属性
 *    只要视图上存在着需要计算得到的结果，都可以用计算属性
 */
const price = computed<number>(() => {
  return parseInt(item1.desc as any) * 100;
});

/**
 * 支付按钮
 */
const onSubmit = () => {
  console.log("支付成功", price.value);
};
</script>
<style lang="less" scoped>
.goods {
  background-color: #fff;
  margin: 10px 0;
  border: 5px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  .image {
    margin-right: 10px;
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      font-size: 15px;
    }
    div {
      display: flex;

      .price {
        flex: 1;
        display: block;
        color: #f23d52;
      }
      .num {
        flex: 1;
        font-size: 12px;
        text-align: right;
        padding-top: 3px;
      }
    }
  }
}
</style>
