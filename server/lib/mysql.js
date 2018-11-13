var mysql = require('mysql');
var config = require('../config/index.js')

var pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE,
  port     : config.database.PORT
});

let query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}


// let query = function( sql, values ) {
// pool.getConnection(function(err, connection) {
//   // 使用连接
//   connection.query( sql,values, function(err, rows) {
//     // 使用连接执行查询
//     console.log(rows)
//     connection.release();
//     //连接不再使用，返回到连接池
//   });
// });
// }

let users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     pass VARCHAR(100) NOT NULL COMMENT '密码',
     avator VARCHAR(100) NOT NULL COMMENT '头像',
     moment VARCHAR(100) NOT NULL COMMENT '注册时间',
     PRIMARY KEY ( id )
    );`

let posts =
    `create table if not exists posts(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '文章作者',
     title TEXT(0) NOT NULL COMMENT '评论题目',
     content TEXT(0) NOT NULL COMMENT '评论内容',
     md TEXT(0) NOT NULL COMMENT 'markdown',
     uid VARCHAR(40) NOT NULL COMMENT '用户id',
     moment VARCHAR(100) NOT NULL COMMENT '发表时间',
     comments VARCHAR(200) NOT NULL DEFAULT '0' COMMENT '文章评论数',
     pv VARCHAR(40) NOT NULL DEFAULT '0' COMMENT '浏览量',
     avator VARCHAR(100) NOT NULL COMMENT '用户头像',
     PRIMARY KEY(id)
    );`

let comment =
    `create table if not exists comment(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名称',
     content TEXT(0) NOT NULL COMMENT '评论内容',
     moment VARCHAR(40) NOT NULL COMMENT '评论时间',
     postid VARCHAR(40) NOT NULL COMMENT '文章id',
     avator VARCHAR(100) NOT NULL COMMENT '用户头像',
     PRIMARY KEY(id) 
    );`

let createTable = ( sql ) => {
  return query( sql, [] )
}

// 建表
createTable(users)
createTable(posts)
createTable(comment)


// 注册用户
const insertData = ( value ) => {
    let _sql = "insert into users set name=?,pass=?,avator=?,moment=?,level=?,memberId=?;"
    return query( _sql, value )
}

// 通过名字查找用户
const findDataByName =  ( name ) => {
    let _sql = `select * from users where name="${name}";`
    return query( _sql)
}

// 查找用户
const findUserData = ( id ) => {
    let _sql = `select * from users where id="${id}";`
    return query( _sql )
}

// 获取会员卡列表
const getMemberList =  ( keyword, page ) => {
    let _sql;
    if(keyword != undefined){
        _sql = ` select * from members where account like "%${keyword}%" or name like "%${keyword}%" order by id desc limit ${(page-1)*10},10;`
    }else{
        _sql = ` select * from members limit ${(page-1)*10},10;`
    }
    return query( _sql)
}

// 注册会员卡
const insertMember = ( value ) => {
    let _sql = `insert into members set account=?,name=?,balance=?,createdTime=?,notes=?;`
    return query( _sql, value )
}

// 通过会员卡ID查找会员卡
const findDataByMemberID =  ( id ) => {
    let _sql = `select * from members where id="${id}";`
    return query( _sql)
}

// 通过会员卡号查找会员卡
const findDataByMember =  ( account ) => {
    let _sql = `select * from members where account="${account}";`
    return query( _sql)
}

// 查找会员卡数量
const findDataByMemberCount =  () => {
    let _sql = `select count(*) as count from members`
    return query( _sql)
}

// 创建充值记录
const insertPaymentRecord = ( value ) => {
    let _sql = "insert into payrecord set account=?,paymentmoney=?, paymentTime=?, paymentMethod=?";
    return query( _sql, value )
}

// 充值
const updatePayment = ( values ) => {
    let _sql = `update members set balance=? where account=?`
    return query( _sql, values)
}

// 充值金额统计
const paymentmoneyCount =  () => {
    let _sql = `select sum(paymentmoney) as totalPrice from payrecord`
    return query( _sql)
}

// 获取充值记录列表
const getpaymentRecord =  ( keyword, page ) => {
    let _sql;
    if(keyword != undefined){
        _sql = ` select * from payrecord where account like "%${keyword}%" order by paymentTime desc limit ${(page-1)*10},10;`
    }else{
        _sql = ` select * from payrecord order by paymentTime desc limit ${(page-1)*10},10;`
    }
    return query( _sql)
}

// 创建消费记录
const insertCostRecord = ( value ) => {
    let _sql = "insert into costrecord set account=?,costmoney=?, costTime=?";
    return query( _sql, value )
}

// 消费
const updateCost = ( values ) => {
    let _sql = `update members set balance=?,integral=? where account=?`
    return query( _sql, values)
}

// 消费金额统计
const costmoneyCount =  () => {
    let _sql = `select sum(costmoney) as totalCost from costrecord`
    return query( _sql)
}

// 获取充值记录列表
const getcostRecord =  ( keyword, page ) => {
    let _sql;
    if(keyword != undefined){
        _sql = ` select * from costrecord where account like "%${keyword}%" order by costTime desc limit ${(page-1)*10},10;`
    }else{
        _sql = ` select * from costrecord order by costTime desc limit ${(page-1)*10},10;`
    }
    return query( _sql)
}

// 修改密码
const updatePassword = ( values ) => {
    let _sql = `update users set pass=? where name=?`
    return query( _sql, values)
}

// 创建操作日记
const addoperatingRecord  = ( value ) => {
    let _sql = "insert into operating set operator=?,content=?, dateTime=?";
    return query( _sql, value )
}

const getoperatingRecord =  ( keyword, page ) => {
    let _sql;
    if(keyword != undefined){
        _sql = ` select * from operating where content like "%${keyword}%" order by dateTime desc limit ${(page-1)*10},10;`
    }else{
        _sql = ` select * from operating order by dateTime desc limit ${(page-1)*10},10;`
    }
    return query( _sql)
}

module.exports = {
    insertData: insertData,
    findDataByName:findDataByName,
    findUserData:findUserData,
    getMemberList:getMemberList,
    insertMember:insertMember,
    findDataByMember:findDataByMember,
    findDataByMemberID:findDataByMemberID,
    findDataByMemberCount:findDataByMemberCount,
    insertPaymentRecord:insertPaymentRecord,
    updatePayment:updatePayment,
    insertCostRecord:insertCostRecord,
    updateCost:updateCost,
    paymentmoneyCount:paymentmoneyCount,
    costmoneyCount:costmoneyCount,
    getpaymentRecord:getpaymentRecord,
    getcostRecord:getcostRecord,
    updatePassword:updatePassword,
    addoperatingRecord:addoperatingRecord,
    getoperatingRecord:getoperatingRecord
}




/*
// 注册用户
exports.insertData = ( value ) => {
  let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
  return query( _sql, value )
}
// 删除用户
exports.deleteUserData = ( name ) => {
  let _sql = `delete from users where name="${name}";`
  return query( _sql )
}
// 查找用户
exports.findUserData = ( id ) => {
    let _sql = `select * from users where id="${id}";`
    return query( _sql )
}
// 发表文章
exports.insertPost = ( value ) => {
  let _sql = "insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;"
  return query( _sql, value )
}
// 更新文章评论数
exports.updatePostComment = ( value ) => {
  let _sql = "update posts set comments=? where id=?"
  return query( _sql, value )
}

// 更新浏览数
exports.updatePostPv = ( value ) => {
  let _sql = "update posts set pv=? where id=?"
  return query( _sql, value )
}

// 发表评论
exports.insertComment = ( value ) => {
  let _sql = "insert into comment set name=?,content=?,moment=?,postid=?,avator=?;"
  return query( _sql, value )
}
// 通过名字查找用户
exports.findDataByName =  ( name ) => {
  let _sql = `select * from users where name="${name}";`
  return query( _sql)
}
// 通过文章的名字查找用户
exports.findDataByUser =  ( name ) => {
  let _sql = `select * from posts where name="${name}";`
  return query( _sql)
}
// 通过文章id查找
exports.findDataById =  ( id ) => {
  let _sql = `select * from posts where id="${id}";`
  return query( _sql)
}
// 通过文章id查找
exports.findCommentById =  ( id ) => {
  let _sql = `select * from comment where postid="${id}";`
  return query( _sql)
}
// 通过评论id查找
exports.findComment =  ( id ) => {
  let _sql = `select * from comment where id="${id}";`
  return query( _sql)
}

// 查询所有文章
exports.findAllPost =  () => {
  let _sql = ` select * from posts;`
  return query( _sql)
}
// 查询分页文章
exports.findPostByPage =  ( page ) => {
  let _sql = ` select * from posts limit ${(page-1)*10},10;`
  return query( _sql)
}
// 查询个人分页文章
exports.findPostByUserPage =  (name,page) => {
  let _sql = ` select * from posts where name="${name}" order by id desc limit ${(page-1)*10},10 ;`
  return query( _sql)
}
// 更新修改文章
exports.updatePost = (values) => {
  let _sql = `update posts set title=?,content=?,md=? where id=?`
  return query(_sql,values)
}
// 删除文章
exports.deletePost = (id) => {
  let _sql = `delete from posts where id = ${id}`
  return query(_sql)
}
// 删除评论
exports.deleteComment = (id) => {
  let _sql = `delete from comment where id=${id}`
  return query(_sql)
}
// 删除所有评论
exports.deleteAllPostComment = (id) => {
  let _sql = `delete from comment where postid=${id}`
  return query(_sql)
}
// 查找评论数
exports.findCommentLength = (id) => {
  let _sql = `select content from comment where postid in (select id from posts where id=${id})`
  return query(_sql)
}

// 滚动无限加载数据
exports.findPageById = (page) => {
  let _sql = `select * from posts limit ${(page-1)*5},5;`
  return query(_sql)
}
// 评论分页
exports.findCommentByPage = (page,postId) => {
  let _sql = `select * from comment where postid=${postId} order by id desc limit ${(page-1)*10},10;`
  return query(_sql)
}


// 注册会员卡
exports.insertMember = ( value ) => {
    let _sql = "insert into members set account=?,name=?,balance=?,integral=?,createdTime=?,notes=?;"
    return query( _sql, value )
}

// 通过会员卡号查找会员卡
exports.findDataByMember =  ( account ) => {
    let _sql = `select * from members where account="${account}";`
    return query( _sql)
}

// 更新会员卡
exports.updateMember = ( value ) => {
    let _sql = "update members set account=?,name=?,balance=?,integral=?,notes=? where id=?";
    return query( _sql, value )
}

//充值记录
exports.insertPayment = ( value ) => {
    let _sql = "insert into payrecord set account=?,balance=?, paymentTime=?, paymentMethod=?";
    return query( _sql, value )
}

// 充值
exports.updatePay = ( value ) => {
    let _sql = "update members set balance=? where account=?";
    return query( _sql, value )
}
*/


/*
充值记录
充值记录ID：123
会员卡号：13128956796
充值金额：100
充值日期：2018-09-25 15:05:19
付款方式：现金/网付*/



