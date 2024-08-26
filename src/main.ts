import { createApp } from "vue";
import { createPinia } from "pinia";
//持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { Tabbar, TabbarItem, DropdownMenu, DropdownItem } from "vant";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "./assets/font/iconfont.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(createPinia());
app.use(router);
app.use(Tabbar);
app.use(TabbarItem);
app.use(pinia);
app.use(DropdownMenu);
app.use(DropdownItem);

app.mount("#app");
