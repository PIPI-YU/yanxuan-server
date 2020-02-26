let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

//测试
let demoData = require('./datas/demo');
router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});


//API
//1.主页接口
let indexData = require("./datas/index.json");
router.get("/getIndexData",(ctx,next)=>{
  ctx.body = indexData;
})
//2.分类左侧导航
let sortNavData = require("./datas/cateNavDatas.json");
router.get("/getSortNavData",(ctx,next)=>{
  ctx.body = sortNavData;
})
//3.分类右侧显示
let sortListData = require("./datas/cateLists.json");
router.get("/getSortListData",(ctx,next)=>{
  ctx.body = sortListData;
})

//安装路由
app
  .use(router.routes())
  .use(router.allowedMethods())

//监听端口
app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
