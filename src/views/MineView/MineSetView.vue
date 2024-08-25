<template>
  <MineSetHeader title="设置" />
  <div class="gap">
    <ItemView :item="item1" />
  </div>
  <div class="gap">
    <ItemView :item="item2" @click="onAccount" />
    <ItemView :item="item3" :right="true" />
  </div>
  <div class="gap">
    <ItemView :item="item4" />
  </div>
  <div class="logout" @click="onLogout">退出登录</div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import MineSetHeader from "@/components/PubHeaderComponent.vue";
import ItemView from "./components/ItemView.vue";
import { useTokenStore } from "../../stores/Login";
import { useRouter } from "vue-router";

const { clearToken } = useTokenStore();
const router = useRouter();

const item1 = {
  text: "个人信息",
  desc: "",
};

const item2 = {
  text: "账号管理",
  desc: "",
};

const item3 = {
  text: "清楚缓存",
  desc: "0.0M",
};

const item4 = {
  text: "关于我们",
  desc: "",
};

const onLogout = () => {
  clearToken();
  router.push("/login");
};

const onAccount = () => {
  router.push("/mineaccount");
};
</script>
<style lang="less" scoped>
.gap {
  margin: 10px 0;
}
.logout {
  height: 50px;
  widows: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
  margin-top: 25px;
}
</style>
