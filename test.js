/**
 * 将vue实例转换为字符串html
 * 使用插件：vue-server-renderer
*/
const vue = require('vue')
const app = new vue({
    template: `<div>Hello world <span>{{num}}</span></div>`,
    data:{
        num:123
    }
})

const renderer = require('vue-server-renderer').createRenderer();
renderer.renderToString(app).then(html=>{
    console.log(html)
})