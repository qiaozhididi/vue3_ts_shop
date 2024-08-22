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


/**
 * 商品详情评价
 */
export function getGoodsComment(params:any){
    return axios({
        url:"/api/api/comment/goods",
        method:"get",
        params
    })
}

