const express = require("express")
const router = express.Router()
const banner = require("./data/banner.json")
const url = require("url")
const SQLConnect = require("./SQLConnect")
const newGoods = require("./data/newsGoods.json")
const personStore = require("./data/personStore.json")
const suitData = require("./data/suit.json")
const jwt = require("jsonwebtoken")
const config = require("./util/config")
const md5 = require("js-md5")

/**
 * banner轮播图
 */
router.get("/banner", (req, res) => {
    res.send(banner)
})

/**
 * 美业快讯
 */
router.get("/beauty", (req, res) => {
    // 接受前端传递的参数
    var page = url.parse(req.url, true).query.page || 1;
    // 编写数据库语句
    const sql = "select * from beauty limit 10 offset " + (page - 1) * 10;
    SQLConnect(sql, null, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})


/**
 * 最新商品
 */
router.get("/newgoods", (req, res) => {
    res.send(newGoods)
})

/**
 * 人才库
 */
router.get("/personstore", (req, res) => {
    res.send(personStore)
})

/**
 * 为你推荐（推荐商品）
 */
router.get("/recommendgoods", (req, res) => {
    const sql = "select * from goods";
    SQLConnect(sql, null, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})

/**
 * 商品详情  Mock.js
 */
router.get("/goods/details", (req, res) => {
    var id = url.parse(req.url, true).query.id;
    const sql = "select * from goods where id=?";
    SQLConnect(sql, [id], result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result[0]
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})

/**
 * 商品详情评价
 */
router.get("/comment/goods", (req, res) => {
    var id = url.parse(req.url, true).query.id || 1;
    const sql = "select * from comment where id=?";
    SQLConnect(sql, [id], result => {
        if (result.length > 0) {
            let images = result[0].images.split(",")
            res.send({
                status: 200,
                data: [{
                    images,
                    id: result[0].id,
                    icon: result[0].icon,
                    name: result[0].name,
                    rate: result[0].rate,
                    time: result[0].time,
                    text: result[0].text
                }]
            })
        } else {
            res.send({
                status: 500,
                data: "暂无数据"
            })
        }
    })
})

/**
 * 商品全部评价
 */
router.get("/comment/all", (req, res) => {
    const sql = "select * from comment"
    SQLConnect(sql, null, result => {
        if (result.length > 0) {
            let currentResult = []
            for (let i = 0; i < result.length; i++) {
                let images = result[i].images.split(",")
                let temp = {
                    images,
                    id: result[i].id,
                    icon: result[i].icon,
                    name: result[i].name,
                    rate: result[i].rate,
                    time: result[i].time,
                    text: result[i].text
                }
                currentResult.push(temp)
            }
            res.send({
                status: 200,
                data: currentResult
            })
        } else {
            res.send({
                status: 500,
                data: "暂无数据"
            })
        }
    })
})

/**
 * 选址列表数据
 */
router.get("/place", (req, res) => {
    var page = url.parse(req.url, true).query.page || 1;
    var location = url.parse(req.url, true).query.location;
    const sql = "select * from place limit 10 offset " + (page - 1) * 10
    SQLConnect(sql, null, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            })
        } else {
            res.send({
                status: 500,
                data: "暂无数据"
            })
        }
    })
})

/**
 * 选址详情
 */
router.get("/place/details", (req, res) => {
    var id = url.parse(req.url, true).query.id;
    const sql = "select * from place where id=?"
    SQLConnect(sql, [id], result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result[0]
            })
        } else {
            res.send({
                status: 500,
                data: "暂无数据"
            })
        }
    })
})


/**
 * 精选套装
 */
router.get("/suit", (req, res) => {
    res.send(suitData)
})


/**
 * 人才列表
 */
router.get("/person/list", (req, res) => {
    var page = url.parse(req.url, true).query.page || 1;
    const sql = "select * from person limit 4 offset " + (page - 1) * 4
    SQLConnect(sql, null, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            })
        } else {
            res.send({
                status: 500,
                data: "暂无数据"
            })
        }
    })
})

/**
 * 人才详情
 */
router.get("/person/details", (req, res) => {
    var id = url.parse(req.url, true).query.id;
    const sql = "select * from person where id=?"
    SQLConnect(sql, [id], result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result[0]
            })
        } else {
            res.send({
                status: 500,
                data: "暂无数据"
            })
        }
    })
})


/**
 * login
 * 
 * 在真正的应用场景中：
 *  获取token和获取用户信息是两个接口
 *  1. 先获取token
 *  2. 在通过token获取用户信息（用户昵称，权限信息等等）
 */
router.post("/login", (req, res) => {
    const { tel, password, verify } = req.body;
    if (verify == md5("iwenwiki")) {
        const sql = "select * from user where `phone`=? AND `password`=?";
        SQLConnect(sql, [tel, password], result => {
            if (result.length > 0) {
                // 生成token
                const token = jwt.sign({
                    id: result[0].id,
                    username: result[0].phone
                }, config.jwtSecret)
                res.send({
                    status: 200,
                    token,
                    username: result[0].phone
                })
            } else {
                res.send({
                    status: 401,
                    data: "用户名密码错误"
                })
            }
        })
    } else {
        res.send({
            status: 405,
            msg: "验证失败"
        })
    }

})

/**
 * 注册接口
 */
router.post("/register", (req, res) => {
    const { password, phone } = req.body;
    // 随机生成用户名
    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    function getRandom(num) {
        var res = ""
        for (var i = 0; i < num; i++) {
            var usernameSQ = Math.ceil(Math.random() * 35)
            res += chars[usernameSQ]
        }
        return res;
    }
    const sql = "insert into user values (null,?,?,?)"
    SQLConnect(sql, [getRandom(6), password, phone], result => {
        if (result.affectedRows) {
            res.send({
                status: 200,
                message: "注册成功"
            })
        } else {
            res.send({
                status: 401,
                message: "注册失败"
            })
        }
    })
})

/**
 * 获取全部订单
 */
router.get("/order/all", (req, res) => {
    const sql = "select * from allorder"
    SQLConnect(sql, null, result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})

/**
 * 获取不同类型的订单
 * 1:待支付
 * 2:待收货
 * 3:待评价
 */

router.get("/order/type", (req, res) => {
    var type = url.parse(req.url, true).query.type;
    const sql = "select * from allorder where status=?"
    SQLConnect(sql, [type], result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})


module.exports = router;
// nodemon