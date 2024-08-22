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
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
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
        {
          path: "/person",
          name: "person",
          component: PersonView,
        },
        {
          path: "/mine",
          name: "mine",
          component: MineView,
        },
      ],
    },
    {
      path: "/city",
      name: "city",
      component: () => import("@/views/HomeView/CityView.vue"),
    },
    {
      path: "/beauty",
      name: "beauty",
      component: () => import("@/views/HomeView/BeautyView.vue"),
    },
    {
      path: "/goodsDetails:id",
      name: "goodsDetails",
      component: () => import("@/views/GoodsView/GoodsDetails.vue"),
    },
  ],
});

export default router;
