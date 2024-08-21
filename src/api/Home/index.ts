import axios from "../../utils/request";

// banner轮播图
export function getBanners() {
  return axios({
    url: "/api/api/banner",
    method: "get",
  });
}
