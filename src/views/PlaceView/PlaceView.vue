<template>
  <TopNavComponent />
  <van-dropdown-menu>
    <van-dropdown-item title="位置" ref="location">
      <div class="list" @click="onLocation">
        <h3 value="area" :class="[active == 'area' ? 'active' : '']">区域</h3>
        <h3 value="subway" :class="[active == 'subway' ? 'active' : '']">
          地铁
        </h3>
      </div>
      <div class="item">
        <van-cell-group v-if="active == 'area'">
          <van-cell
            :value="item"
            v-for="(item, index) in areas"
            :key="index"
            @click="onItem(item)"
          />
        </van-cell-group>
        <van-cell-group v-if="active == 'subway'">
          <van-cell
            :value="item"
            v-for="(item, index) in subways"
            :key="index"
            @click="onItem(item)"
          />
        </van-cell-group>
      </div>
    </van-dropdown-item>
    <van-dropdown-item title="类型" ref="type">
      <div class="container">
        <div class="title">商铺类型</div>
        <div class="btn" v-for="(item, index) in types" @click="onType(item)">
          {{ item }}
        </div>
      </div>
    </van-dropdown-item>
  </van-dropdown-menu>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import TopNavComponent from "@/components/TopNavComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const areas = ["不限", "东城区", "西城区", "朝阳区", "海淀区", "昌平区"];
const subways = ["不限", "一号线", "二号线", "五号线", "六号线", "昌平线"];
const types = ["不限", "商场/超市", "商业街", "社区底商"];
const mores1 = {
  title: "面积",
  btns: ["不限", "20m²以下", "20m²-50m²", "50m²-100m²", "100m²以上"],
};
const mores2 = {
  title: "楼层",
  btns: ["不限", "地下", "一层", "二层", "二层以上"],
};

interface IParams {
  location: string;
  price: string;
  type: string;
}

const active = ref<string>("area");
const location = ref();
const price = ref();
const type = ref();
const more = ref();
const selectBtn1 = ref("不限");
const selectBtn2 = ref("不限");

const params: IParams = reactive({
  location: "不限",
  price: "不限",
  type: "不限",
});

const onLocation = (event: Event) => {
  active.value = event.target.getAttribute("value");
};

const onItem = (value: string) => {
  params.location = value;
  location.value.toggle();
};

const onPrice = (value: string) => {
  params.price = value;
  price.value.toggle();
};

const onType = (value: string) => {
  params.type = value;
  type.value.toggle();
};
</script>
<style lang="less" scoped>
.list {
  width: 50%;
  float: left;
  background: #f3f4f5;

  h3 {
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    box-sizing: border-box;
  }

  h3.active {
    background: #fff;
  }
}

.item {
  width: 50%;
  float: left;

  .item-cell {
    text-align: left;
  }
}
</style>
