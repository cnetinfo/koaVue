const sqlModel = require('../lib/mysql.js');
const md5 = require('md5')
const moment = require('moment');
const fs = require('fs')

exports.register = async ctx => {
    let { name, password, repeatpass, avator } = ctx.request.body;
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
                    message: '用户存在'
                };;

            } else if (password !== repeatpass || password === '') {
                ctx.body = {
                    code: 500,
                    message: '两次输入的密码不一致'
                };
            } else {
                await sqlModel.insertData([name, md5(password),  '1234.png', moment().format('YYYY-MM-DD HH:mm:ss')])
                .then(res => {
                    console.log('注册成功', res)//注册成功
                    ctx.body = {
                        code: 200,
                        message: '注册成功'
                    };
                })
            }
        })
}
