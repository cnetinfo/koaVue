const sqlModel = require('../lib/mysql.js');
const md5 = require('md5');                     //密码加密
const moment = require('moment');               //时间中间件
const jwt = require('jsonwebtoken');            // 用于签发、解析`token`
const fs = require('fs');                       //文件系统使用读取
const Hashids = require('hashids');

const secret = 'secret';
/* 获取一个期限为4小时的token */
const getToken = (payload = {}) => {
    return jwt.sign(payload, secret, { expiresIn: '12h' });
};
/* 通过token获取JWT的payload部分 */
const  getJWTPayload = (token) => {
    // 验证并解析JWT
    return jwt.verify(token.split(' ')[1], secret);
}

class UserController {
    // 用户注册
    async register(ctx) {
        let { name, password, repeatpass, avator, level } = ctx.request.body;
        ctx.response.set("Content-Type", "application/json")
        await sqlModel.findDataByName(name)
            .then(async (result) => {
                console.log(result)
                if (result.length) {
                    try {
                        throw Error('用户已经存在')
                    } catch (error) {
                        console.log(error)//处理err
                    }
                    ctx.body = {
                        code: 500,
                        message: '用户已经存在'
                    };;

                } else if (password !== repeatpass || password === '') {
                    ctx.body = {
                        code: 500,
                        message: '两次输入的密码不一致'
                    };
                } else {
                    await sqlModel.insertData([name, md5(password), avator, moment().format('YYYY-MM-DD HH:mm:ss'),level])
                        .then(res => {
                            ctx.session = {
                                user: name,
                                id: res.insertId
                            };
                            ctx.body = {
                                code: 200,
                                message: '注册成功',
                                token: getToken(ctx.session)
                            };
                        })
                }
            })
    }

    // 用户登录
    async login(ctx) {
        let { name, password } = ctx.request.body;
        await sqlModel.findDataByName(name)
            .then(result => {
                let res = result
                if (res.length && name === res[0]['name'] && md5(password) === res[0]['pass']) {
                    ctx.session = {
                        user: res[0]['name'],
                        id: res[0]['id']
                    }
                    ctx.body = {
                        code: 200,
                        message: '登录成功',
                        data:{
                            level:res[0]['level'],
                            memberId:res[0]['memberId']
                        },
                        token: getToken(ctx.session)
                    };
                } else {
                    ctx.body = {
                        code: 500,
                        message: '用户名或密码错误'
                    }
                    console.log('用户名或密码错误!')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    // 用户信息
    async userinfo(ctx) {
        //访问需要认证的接口时，需要在request头附带Authorization:Bearer [token]字段。
        var payload = getJWTPayload(ctx.headers.authorization)
        var userId = payload.id;
        await sqlModel.findUserData(userId)
            .then(result => {
                let res = result;
                delete(res[0]["pass"]);
                 if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res[0]
                    }
                } else {
                    return ctx.response.body = {
                        code: 500,
                        message: '获取信息失败'
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    //会员卡注册
    async createmember(ctx) {
        let { avator, account, name, balance, level, notes, operator } = ctx.request.body;
        ctx.response.set("Content-Type", "application/json");
        await sqlModel.findDataByMember(account)
            .then(async (result) => {
                if (result.length) {
                    try {
                        throw Error('会员卡号已经存在')
                    } catch (error) {
                        console.log(error)//处理err
                    }
                    ctx.body = {
                        code: 500,
                        message: '会员卡号已经存在'
                    };;

                } else {
                    if(balance ==''){
                        balance = 0
                    }
                    await sqlModel.insertMember([account, name, balance, moment().format('YYYY-MM-DD HH:mm:ss'), notes])
                        .then(async (res) => {
                            var memberId = res.insertId;
                            var password ='123456';
                            ctx.session = {
                                account: account,
                                id: res.insertId
                            };
                            ctx.body = {
                                code: 200,
                                message: '会员开卡成功',
                                //token: getToken(ctx.session)
                            };
                            console.log(avator)
                            //开卡成功并且注册账号
                            await sqlModel.insertData([account, md5(password), avator, moment().format('YYYY-MM-DD HH:mm:ss'), level, memberId ])
                                .then(res => {
                                    console.log('账号注册成功');
                                });

                            var content = `给${account}用户开通了会员卡`
                            await sqlModel.addoperatingRecord([operator, content, moment().format('YYYY-MM-DD HH:mm:ss')])
                                .then(res => {
                                    console.log('操作纪录写入成功');
                                });


                            //充值记录
                            let paymentmoney = balance;
                            let paymentMethod = 1; //现金
                            if(paymentmoney!=0 || paymentmoney!=''){
                                await sqlModel.insertPaymentRecord([account, paymentmoney, moment().format('YYYY-MM-DD HH:mm:ss'), paymentMethod])
                                    .then( res => {
                                        console.log(res)
                                    })
                            }
                        })
                }
            })
    }

    //会员卡列表
    async memberlist(ctx){
        let { keyword, page } = ctx.request.body;
        await sqlModel.getMemberList( keyword, page )
            .then(result => {
                let res = result;
                var hashids = new Hashids();
                //delete(res[0]["pass"]);
                for(var i=0; i<res.length; i++){
                    res[i].code = Number(res[i].id) + 1000000
                    res[i].id = hashids.encode(res[i].id)
                }

                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res
                    }
                } else {
                    return ctx.response.body = {
                        code: 200,
                        data: []
                    }
                    /*return ctx.response.body = {
                        code: 500,
                     message: '获取信息失败'
                    }*/
                }
            }).catch(err => {
                console.log(err)
            })
    }

    //会员卡信息
    async memberinfo(ctx) {
        let { memberId } = ctx.request.body;
        await sqlModel.findDataByMemberID(memberId)
            .then(result => {
                let res = result;

                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res[0]
                    }
                } else {
                    return ctx.response.body = {
                        code: 500,
                        message: '获取信息失败'
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    // 获取会员卡数量
    async membercount(ctx) {
        await sqlModel.findDataByMemberCount()
            .then(result => {
                let res = result;
                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res[0]
                    }
                } else {
                    return ctx.response.body = {
                        code: 500,
                        message: '获取信息失败'
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    // 用户充值
    async memberpay(ctx) {
        let { account, paymentmoney, paymentMethod,operator } = ctx.request.body;
        ctx.response.set("Content-Type", "application/json")
        await sqlModel.findDataByMember(account)
            .then(async (result) => {
                if (!result.length) {
                    try {
                        throw Error('充值账号不存在')
                    } catch (error) {
                        console.log(error)//处理err
                    }
                    ctx.body = {
                        code: 500,
                        message: '充值账号不存在'
                    };
                }else {

                    await sqlModel.insertPaymentRecord([account, paymentmoney, moment().format('YYYY-MM-DD HH:mm:ss'), paymentMethod])
                        .then(async (res) => {

                            let balance = Number(result[0].balance) + Number(paymentmoney);
                            if(res.insertId){

                                var content = `给${account}用户充值了${paymentmoney}元`
                                await sqlModel.addoperatingRecord([operator, content, moment().format('YYYY-MM-DD HH:mm:ss')])
                                    .then(res => {
                                        console.log('操作纪录写入成功');
                                    });

                                await sqlModel.updatePayment([ balance, account])
                                    .then(res => {
                                        ctx.body = {
                                            code: 200,
                                            message: '充值成功',
                                        };
                                    })
                            }

                        })
                }
            })
    }

    // 用户充值统计
    async getmoneycount(ctx) {
        await sqlModel.paymentmoneyCount()
            .then(result => {
                let res = result;
                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res[0]
                    }
                } else {
                    return ctx.response.body = {
                        code: 500,
                        message: '获取信息失败'
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    //用户充值记录列表
    async getpaymentrecord(ctx){
        let { keyword, page } = ctx.request.body;
        await sqlModel.getpaymentRecord( keyword, page )
            .then(result => {
                let res = result;

                // var hashids = new Hashids();
                // for(var i=0; i<res.length; i++){
                //     res[i].code = Number(res[i].id) + 1000000
                //     res[i].id = hashids.encode(res[i].id)
                // }

                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res
                    }
                } else {
                    return ctx.response.body = {
                        code: 200,
                        data: []
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    // 用户消费
    async membercost(ctx) {
        let { account, costmoney, operator } = ctx.request.body;
        ctx.response.set("Content-Type", "application/json")
        await sqlModel.findDataByMember(account)
            .then(async (result) => {
                if (!result.length) {
                    try {
                        throw Error('账号不存在')
                    } catch (error) {
                        console.log(error)//处理err
                    }
                    ctx.body = {
                        code: 500,
                        message: '账号不存在'
                    };
                }else {

                    let amount  = result[0].balance
                    let balance = Number(result[0].balance) - Number(costmoney);

                    if(amount==0||balance<0){
                        ctx.body = {
                            code: 500,
                            message: '账号余额不足，请充值~'
                        };
                    }else{
                        await sqlModel.insertCostRecord([account, costmoney, moment().format('YYYY-MM-DD HH:mm:ss')])
                            .then(async (res) => {

                                if(res.insertId){
                                    await sqlModel.updateCost([ balance, costmoney, account])
                                        .then(res => {
                                            ctx.body = {
                                                code: 200,
                                                message: '扣费成功',
                                            };
                                        })

                                    var content = `给${account}用户结账了${costmoney}元`
                                    await sqlModel.addoperatingRecord([operator, content, moment().format('YYYY-MM-DD HH:mm:ss')])
                                        .then(res => {
                                            console.log('操作纪录写入成功');
                                        });
                                }

                            })
                    }

                }
            })
    }

    // 用户消费统计
    async getcostmoneycount(ctx) {
        await sqlModel.costmoneyCount()
            .then(result => {
                let res = result;
                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res[0]
                    }
                } else {
                    return ctx.response.body = {
                        code: 500,
                        message: '获取信息失败'
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    //用户消费记录列表
    async getcostrecord(ctx){
        let { keyword, page } = ctx.request.body;
        await sqlModel.getcostRecord( keyword, page )
            .then(result => {
                let res = result;

                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res
                    }
                } else {
                    return ctx.response.body = {
                        code: 200,
                        data: []
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    //修改密码
    async changepassword(ctx) {
        let { name, oldpass, newpass } = ctx.request.body;
        ctx.response.set("Content-Type", "application/json")
        await sqlModel.findDataByName(name)
            .then(async (result) => {
                let res = result
                if (!res.length) {
                    try {
                        throw Error('账号不存在')
                    } catch (error) {
                        console.log(error)//处理err
                    }
                    ctx.body = {
                        code: 500,
                        message: '账号不存在'
                    };
                }else {
                    if (md5(oldpass) === res[0]['pass']) {
                        await sqlModel.updatePassword([ md5(newpass), name ])
                            .then(res => {
                                ctx.body = {
                                    code: 200,
                                    message: '修改密码成功',
                                };
                            })
                    }else{
                        ctx.body = {
                            code: 500,
                            message: '旧密码错误'
                        };
                    }
                }
            })
    }

    //操作纪录
    async getoperatingRecord(ctx){
        let { keyword, page } = ctx.request.body;
        await sqlModel.getoperatingRecord( keyword, page )
            .then(result => {
                let res = result;

                if (res && res.length) {
                    return ctx.response.body = {
                        code: 200,
                        data: res
                    }
                } else {
                    return ctx.response.body = {
                        code: 200,
                        data: []
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }

    async uploadFilds(ctx) {
        // 获取上传文件对象
        //console.log(ctx.req.file)
        //${ctx.req.file.destination}
        let filename = ctx.req.file.filename;
        let fileurl = `http://${ctx.host}/images/${filename}`;
        ctx.body = {
            code: 200,
            message:'上传成功',
            data: fileurl
        }
    }

    // 用户退出
    async logout(ctx) {
        // await ……
    }

    // 更新用户资料
    async put(ctx) {
        // await ……
    }

    // 删除用户
    async deluser(ctx) {
        // await ……
    }

    // 重置密码
    async resetpwd(ctx) {
        // await ……
    }

}
module.exports = new UserController();
//exports.userController = userController;
//export default new UserController()



