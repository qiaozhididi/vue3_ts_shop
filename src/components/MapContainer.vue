<template>
  <div ref="mapRef" style="width: 100%; height: 90vh; margin-top: 10px" />
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { load } from "@amap/amap-jsapi-loader";

const mapRef = ref(); // 对应地图渲染的 ref 元素 <div ref="mapRef" />
const map = ref();
const initMapView = async () => {
  try {
    window._AMapSecurityConfig = {
      securityJsCode: "b7613f4772f06ddd760e3a015520e51b",
    };
    map.value = await load({
      key: "b4a125be0ce4fb269e9e193b66f168e7",
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    });
    new map.value.Map(mapRef.value, {
      viewMode: "3D", // 是否为3D地图模式
      zoom: 11, // 初始化地图级别
      center: [106.603408, 29.531952],
      resizeEnable: true,
    });
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  initMapView();
});
onUnmounted(() => {
  map.value.destroy();
});
</script>
