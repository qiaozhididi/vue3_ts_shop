import { createApp } from "vue";
import { createPinia } from "pinia";
//持久化
import piniaPersist from "pinia-plugin-persist";
import { Tabbar, TabbarItem, DropdownMenu, DropdownItem } from "vant";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "./assets/font/iconfont.css";

//引入百度地图
import BaiduMap from "vue-baidu-map-3x";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(createPinia());
app.use(router);
app.use(Tabbar);
app.use(TabbarItem);
app.use(pinia);
app.use(DropdownMenu);
app.use(DropdownItem);

app.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "2MzwGA0Ef5qvIbWbmtKyW3rBfgXGlKvY",
  // v:'2.0',  // 默认使用3.0
  // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
});

app.mount("#app");
