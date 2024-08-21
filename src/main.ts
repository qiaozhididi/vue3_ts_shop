import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tabbar, TabbarItem } from "vant";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css"
import "./assets/font/iconfont.css"

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Tabbar);
app.use(TabbarItem);

app.mount("#app");
