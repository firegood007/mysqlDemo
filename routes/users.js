var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );
// 响应一个JSON数据
var responseJSON = function (res, ret) {
     if(typeof ret === 'undefined') {
          res.json({     code:'-200',     msg: '操作失败'
        });
    } else {
      res.json(ret);
  }};
// 添加
router.get('/addUser', function(req, res, next){
 // 从连接池获取连接
     pool.getConnection(function(err, connection) {
    // 获取前台页面传过来的参数
         var param = req.query || req.params;
        // 建立连接 增加一个用户信息
        connection.query(userSQL.insert, [param.uid,param.name], function(err, result) {
                if(result) {
                     result = {
                              code: 200,
                             msg:'增加成功'
                     };
                }

             // 以json形式，把操作结果返回给前台页面
               responseJSON(res, result);

             // 释放连接
              connection.release();

        });
    });
 });
 //查询
 router.get('/checkUser', function(req, res, next){
  // 从连接池获取连接
      pool.getConnection(function(err, connection) {
     // 获取前台页面传过来的参数
          var param = req.query || req.params;
         // 建立连接 增加一个用户信息
         connection.query(userSQL.queryAll, function(err, result) {
                 res.json(result);
                 console.log(result)
              // 释放连接
               connection.release();

         });
     });
  });
  //带有查询条件的查询
  router.get('/checkUserId', function(req, res, next){
   // 从连接池获取连接
       pool.getConnection(function(err, connection) {
      // 获取前台页面传过来的参数
           var param = req.query || req.params;
          // 建立连接 增加一个用户信息
          connection.query(userSQL.getUserById,[param.uid],function(err, result) {
                  res.json(result);
                  console.log(result)
               // 释放连接
                connection.release();

          });
      });
   });
   //删除数据
   router.get('/deleteUser', function(req, res, next){
    // 从连接池获取连接
        pool.getConnection(function(err, connection) {
       // 获取前台页面传过来的参数
            var param = req.query || req.params;
           // 建立连接 增加一个用户信息
           connection.query(userSQL.deleteUid, [param.uid],function(err, result) {
                   res.json(result);
                   console.log(result)
                // 释放连接
                 connection.release();

           });
       });
    });
    //跟新修改
    router.get('/updataUser', function(req, res, next){
     // 从连接池获取连接
         pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数
             var param = req.query || req.params;
            // 建立连接 增加一个用户信息
            connection.query(userSQL.updataUser,[param.uid],function(err, result) {
                    res.json(result);
                    console.log(result)
                 // 释放连接
                  connection.release();

            });
        });
     });
     //like
     router.get('/likeUser', function(req, res, next){
      // 从连接池获取连接
          pool.getConnection(function(err, connection) {
         // 获取前台页面传过来的参数
              var param = req.query || req.params;
             // 建立连接 增加一个用户信息
             connection.query(userSQL.likeUser,function(err, result) {
                     res.json(result);
                     console.log(result)
                  // 释放连接
                   connection.release();

             });
         });
      });
      router.get('/orderByUser', function(req, res, next){
       // 从连接池获取连接
           pool.getConnection(function(err, connection) {
          // 获取前台页面传过来的参数
               var param = req.query || req.params;
              // 建立连接 增加一个用户信息
              connection.query(userSQL.orderByUser,function(err, result) {
                      res.json(result);
                      console.log(result)
                   // 释放连接
                    connection.release();

              });
          });
       });
module.exports = router;
