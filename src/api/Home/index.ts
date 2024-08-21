import axios from "../../utils/request";

// banner轮播图
export function getBanners() {
  return axios({
    url: "/api/api/banner",
    method: "get",
  });
}

// 快讯
export function getBeauty(params: any) {
  return axios({
    url: "/api/api/beauty",
    method: "get",
    params,
  });
}

// 最新商铺
export function getNewGoods(){
  return axios({
      url:"/api/api/newgoods",
      method:"get"
  })
}
