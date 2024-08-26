<template>
  <MapHeader title="位置" />
  <MapContainer />
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import MapHeader from "@/components/PubHeaderComponent.vue";
import MapContainer from "@/components/MapContainer.vue";
</script>
<style lang="less" scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>
