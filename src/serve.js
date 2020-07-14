/**
 * 服务端打包入口
 * 解析路由->找到template->根据vue实例->返回html字符串
 * */
import { createApp } from './main'
export default context=>{
    return new Promise((resolve,reject)=>{
        const {app,router} = createApp()
        router.push(context.url);
        //得到匹配节点
        router.onReady(()=>{
            const matchComponnets = router.getMatchedComponents();
            if(!matchComponnets){
                return reject({code:404})
            }
            resolve(app)
        },reject)
    })
}