const Koa = require('koa');                       //node框架
const cors = require('koa2-cors');                //允许跨域的插件
const path = require('path');
const bodyParser = require('koa-bodyparser');     //表单解析中间件
const session = require('koa-session-minimal');   //处理数据库的中间件
const MysqlStore = require('koa-mysql-session');  //处理数据库的中间件
const config = require('./config/index.js');      //数据库配置
const staticCache = require('koa-static-cache');  //文件缓存
const jwtKoa = require('koa-jwt');                //用于路由权限控制
const static = require('koa-static');             //静态资源加载中间件
const app = new Koa();
const router = require('./routers/index.js');
//const Router = require('koa-router');           //路由中间件
//const router = new Router();


/*跨域*/
app.use(cors({
    maxAge: 86400
}));

/*jwt密钥*/
const secret = 'secret';
/*当token验证异常时候的处理，如token过期、token错误*/
app.use((ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                code: 500,
                msg: err.originalError ? '服务器异常' : '用户没有登录'
            }
            // msg: err.originalError ? err.originalError.message : err.message
        } else {
            throw err;
        }
    });
});

// 配置静态web服务的中间件
const staticPath = './upload';
app.use(static(path.join( __dirname,  staticPath)));


/*路由权限控制*/
app.use(jwtKoa({ secret: secret }).unless({
    // 设置login、register接口，可以不需要认证访问
    path: [
        /^\/activateMember/,
        /^\/signin/,
        /^((?!).)*$/ // 设置除了私有接口外的其它资源，可以不需要认证访问 /^\/signup/,
    ]
}));

/*session存储配置*/
const sessionMysqlConfig= {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
};

/*配置session中间件*/
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}));



app.use(bodyParser({
    formLimit: '1mb'
}));

/*缓存*/
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}));
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}));

//  路由
/*app.use(require('./routers/signin.js').routes())
app.use(require('./routers/signup.js').routes())
app.use(require('./routers/posts.js').routes())
app.use(require('./routers/signout.js').routes())*/


/*const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.type = 'application/json';
  ctx.response.body = {
    'title':'Hello Koa'
  };
};
router.get('/', main)
router.get('/about', about)
app.use(router.routes());*/

app.use(router.routes());

app.listen(config.port)
console.log(`listening on port ${config.port}`)
