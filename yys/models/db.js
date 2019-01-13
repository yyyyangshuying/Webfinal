var mysql = require("mysql");/*引用第三方mysql*/
var db = {};
db.query = function (sql,queryArray, callback) {
    var connect = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "ysyhh521",
        database:"test",
        port:3306
    });
    connect.connect();
    connect.query(sql,queryArray,function (err, rows) {
        console.log(err);
        callback(rows);
    });
    connect.end();
};
module.exports = db;