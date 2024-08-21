import axios from "../../utils/request";

// banner轮播图
export function getBanners() {
  return axios({
    url: "http://localhost:3010/api/banner",
    method: "get",
  });
}
