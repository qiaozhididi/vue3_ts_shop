import axios from "../../utils/request";

/**
 * 商品详情
 */
export function getGoodsDetails(params: any) {
  return axios({
    url: "/api/api/goods/details",
    method: "get",
    params,
  });
}
