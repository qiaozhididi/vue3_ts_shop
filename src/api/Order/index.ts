import axios from "../../utils/request"

// 全部订单
export function getOrderAll(){
    return axios({
        url:"/api/api/order/all",
        method:"get"
    })
}