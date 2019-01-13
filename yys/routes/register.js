var express = require('express');
var router = express.Router();
var db=require('../models/db');

/* GET users listing. */


router.get('/', function(req, resp) {
    db.query("select * from user",function (rows) {
        console.log(rows);
    });
    resp.render('register',{});
});
router.post('/',function (req,resp) {
    var userName=req.body.userName;
    var passWord=req.body.passWord;
    var login = "SELECT * FROM `user` where name = ?";
    db.query(login,[userName,passWord],function (rows){
        console.log(rows);
        if(rows != null && rows.length > 0){
            req.flash('err','已有用户名');
            resp.redirect('register');
        }else{
            var login_sql = "insert into `user`(name,password) value(?,?)";
            db.query(login_sql,[userName,passWord],function (rows){
                console.log(rows);
                if(rows){
                    resp.render('login',{});
                }else{
                    req.flash('err','注册失败');
                    resp.redirect('/register');
                }
            });
        }
    });
});









// router.post('/',function (req,resp) {
//     var userName=req.body.userName;
//     var passWord=req.body.passWord;
//     var login_sql = "insert into `user`(name,password) value(? , ?)";
//     db.query(login_sql,[userName,passWord],function (rows){
//         console.log(rows);
//         if(rows){
//             resp.render('login',{});
//         }else{
//             req.flash('err','注册失败');
//             resp.redirect('register');
//         }
//     });
// });

module.exports = router;