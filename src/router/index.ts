import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";
import HomeView from "../views/HomeView/HomeView.vue";
import MineView from "../views/MineView/MineView.vue";
import PersonView from "@/views/PersonView/PersonView.vue";
import PlaceView from "@/views/PlaceView/PlaceView.vue";
import ShopView from "@/views/ShopView/ShopView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: LayoutView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mine",
      name: "mine",
      component: MineView,
    },
    {
      path: "/person",
      name: "person",
      component: PersonView,
    },
    {
      path: "/place",
      name: "place",
      component: PlaceView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
  ],
});

export default router;
