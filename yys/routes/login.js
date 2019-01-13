var express = require('express');
var router = express.Router();
var db=require('../models/db');

router.get('/',function (req,resp) {
    db.query("select * from user",function (rows) {
        console.log(rows);
    });
    resp.render('login',{});/*访问路由*/
});

router.post('/',function (req,resp){
    var userName=req.body.userName;
    var passWord=req.body.passWord;
    var login_sql="SELECT * from `user`  where name = ? and password= ? ";
        db.query(login_sql,[userName,passWord],function (rows) {
       console.log(rows);
       if(rows != null && rows.length > 0){
           //登录成功
           resp.render('index',{});
       }else{
           //登录失败
           req.flash("err","登录失败");
           resp.redirect('login');
       }
    });
});

// /* GET users listing. */
// router.get('/', function(req, res) {
//     res.render('login','');/*跳转到login界面*/
// });

module.exports = router;
