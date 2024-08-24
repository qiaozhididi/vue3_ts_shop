<template>
  <MapHeader title="位置" />
  <baidu-map
    class="map"
    :center="{ lng: 116.337474, lat: 40.084816 }"
    :zoom="19"
    @ready="ready"
  ></baidu-map>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import MapHeader from "@/components/PubHeaderComponent.vue";

const ready = ({ BMap, map }: any) => {
  console.log(BMap, map);
};
</script>
<style lang="less" scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>
