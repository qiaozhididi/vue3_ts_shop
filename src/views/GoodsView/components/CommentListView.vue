<template>
  <CommentListHeader title="全部评价" />
  <CommentView :comment="item" v-for="(item, index) in comment" :key="index" />
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import CommentListHeader from "@/components/PubHeaderComponent.vue";
import { getGoodsCommentAll } from "@/api/Goods/index";
import CommentView from "./CommentView.vue";

const comment = ref([]);

onMounted(async () => {
  const res = await getGoodsCommentAll();
  if (res.data.status == 200) {
    comment.value = res.data.data;
  }
});
</script>
<style lang="less" scoped></style>
