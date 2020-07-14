//客户端入口
import { createApp } from './main'
const { app,router } = createApp()

//防止异步路由
router.onReady(()=>{
    app.$mount('#app');
})