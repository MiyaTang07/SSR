/**
 * step1:解析url路径
 * step2:根据路径-->读取文件
 * step3:根据vue实例生成html字符串
 * 页面访问node服务:localhost:3000/index
*/
const vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const fs = require('fs')

function createApp(url){
    if(url === '/index'){
        url = '/index'
    }
    var template = fs.readFileSync(`template${url}.html`,'utf-8');
    return new vue({
        template:template
    })
}

//所有服务上的请求
server.get('*',function(req,res){
  const app = createApp(req.url)
  renderer.renderToString(app,(err,html)=>{
     res.end(html)
  })
})

server.listen(3000)