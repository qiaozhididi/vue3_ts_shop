# Vue3+TS 移动端商城项目
## 1.项目技术栈
    1.vue3+vite+ts
    2.vue-router4
    3.Pinia状态管理工具
    4.less css预编译
    5.axios请求封装
    6.UI组件库：vant


## 环境搭建
工具链：npm create vite@latest
UI组件库：npm i vant@next -S 

## 本地存储持久化
安装依赖：pinia-plugin-persist

## 跨域配置
原因：浏览器同源策略。域名，端口，协议不同都会引起跨域
解决方案：
1.代理配置：在vite.config.ts中配置代理
2.CORS跨域：后端配置
3.开发环境与生产环境配置
    - 后端解决可以用于生产环境
    - 前端解决只能在开发环境，如果是生产环境，需要额外处理