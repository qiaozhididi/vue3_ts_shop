<template>
  <div class="order-container">
    <!-- ItemView只渲染一条数据，遍历ItemView -->
    <ItemView :item="item" v-for="(item, index) in orderList" :key="index" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getOrderAll } from "@/api/Order/index";
import ItemView from "./components/ItemView.vue";

const orderList = ref([]);

onMounted(async () => {
  const res = await getOrderAll();
  if (res.data.status === 200) {
    orderList.value = res.data.data;
  }
});
</script>
<style lang="less" scoped>
.order-container {
  margin-top: 5px;
}
</style>
