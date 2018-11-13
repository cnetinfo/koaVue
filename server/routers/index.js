const Router = require('koa-router');
const router = new Router();
const userCtr = require('../controller/userController.js');
const upload = require('../utils/upload.js');


const main = ctx => {
    ctx.response.type = 'application/json';
    ctx.response.body = {
        'title':'Koa Server'
    };
};

//首页
router.get('/', main)

// 用户注册
router.post('/signup', userCtr.register);
// 用户登录
router.post('/signin', userCtr.login);
// 获取用户信息
router.post('/userinfo', userCtr.userinfo);


// 获取会员卡列表
router.post('/getmemberlist', userCtr.memberlist);
// 注册会员卡
router.post('/activateMember', userCtr.createmember);
// 获取会员卡信息
router.post('/getmemberinfo', userCtr.memberinfo);
// 获取会员卡数量
router.post('/getmembercount', userCtr.membercount);
// 会员卡充值
router.post('/memberpay', userCtr.memberpay);
// 会员卡充值统计
router.post('/getmoneycount', userCtr.getmoneycount);
// 会员卡充值记录列表
router.post('/getpaymentrecord', userCtr.getpaymentrecord);
// 会员卡消费
router.post('/membercost', userCtr.membercost);
// 会员卡消费统计
router.post('/getcostmoneycount', userCtr.getcostmoneycount);
// 会员卡充值记录列表
router.post('/getcostrecord', userCtr.getcostrecord);
// 修改密码
router.post('/changepassword', userCtr.changepassword);
// 操作记录列表
router.post('/getoperatingRecord', userCtr.getoperatingRecord);

//文件上传
router.post('/uploadfile', upload.single('file'),userCtr.uploadFilds)




module.exports = router;
