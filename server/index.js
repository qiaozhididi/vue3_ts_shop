const express = require("express");
const app = express();
const router = require("./router");
const bodyParser = require("body-parser");
// const cors = require("cors")

// app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use("/api",router);

app.listen(3010,() =>{
    console.log("服务器运行在3010端口上");
})