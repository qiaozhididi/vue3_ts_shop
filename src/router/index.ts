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
    {
      path: "/commentList",
      name: "commentList",
      component: () =>
        import("@/views/GoodsView/components/CommentListView.vue"),
    },
    {
      path: "/placeDetails/:id",
      name: "placeDetails",
      component: () => import("@/views/PlaceView/PlaceDetailsView.vue"),
    },
    {
      path: "/placeMap",
      name: "placeMap",
      component: () => import("@/views/PlaceView/PlaceMapsView.vue"),
    },
    {
      path: "/personDetails:id",
      name: "personDetails",
      component: () => import("@/views/PersonView/PersonDetailsView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/LoginView/RegisterView.vue"),
    },
    {
      path: "/mineset",
      name: "mineset",
      component: () => import("@/views/MineView/MineSetView.vue"),
    },
    {
      path: "/mineaccount",
      name: "mineaccount",
      component: () => import("@/views/MineView/MineAccountView.vue"),
    },
    {
      path: "/minedata",
      name: "minedata",
      component: () => import("@/views/MineView/MineDataView.vue"),
    },
  ],
});

export default router;
