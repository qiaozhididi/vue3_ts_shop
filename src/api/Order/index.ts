import axios from "../../utils/request"

// 全部订单
export function getOrderAll(){
    return axios({
        url:"/api/api/order/all",
        method:"get"
    })
}

// 根据订单类型获取数据
export function getOrderType(params:any){
    return axios({
        url:"/api/api/order/type",
        method:"get",
        params
    })
}