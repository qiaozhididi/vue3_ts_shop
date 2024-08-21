const mysql = require("mysql");

var pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  protocol: "mysql",
  user: "qzfrato",
  password: "password",
  database: "vue3_shop",
  connectionLimit: 100, //最大连接数
});

function SQLConnect(sql, arr, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("数据库连接成功");
    }
    conn.query(sql, arr, function (err, data) {
      if (err) {
        console.log(err);
        return;
      } else {
        callback(data);
      }
      conn.release(); //释放连接
    });
  });
}

module.exports = SQLConnect;
