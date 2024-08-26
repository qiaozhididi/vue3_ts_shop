<template>
  <MineDataHeader title="个人资料" />
  <div class="gap">
    <ItemView :image="true" :item="item1" />
    <ItemView :item="item2" />
    <ItemView :item="item3" />
    <ItemView :item="item4" />
  </div>
  <div class="gpa">
    <ItemView :item="item5" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import MineDataHeader from "@/components/PubHeaderComponent.vue";
import ItemView from "./components/ItemView.vue";
import icon from "@/assets/images/icon.png";
import { useTokenStore } from "@/stores/Login";

const { user } = useTokenStore();

const item1 = {
  text: "头像",
  image: icon,
  desc: "昵称",
};

const item2 = {
  text: "昵称",
  desc: user.username,
};
const item3 = {
  text: "性别",
  desc: "男",
};
const item4 = {
  text: "升入",
  desc: "",
};
const item5 = {
  text: "收货地址",
  desc: "",
};
</script>
<style lang="less" scoped>
.gap {
  margin: 10px 0;
}
</style>
