import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { registerMicroApps, start } from 'qiankun'
// 注册微应用
registerMicroApps([
    {
        name: 'tools_web', //子应用的名称
        entry: '//localhost:3001', //子项目启动后的地址
        container: '#container', //加载的容器
        activeRule: '/tools_web' //匹配的路由
    }
])
// 启动 qiankun
start()
const app = createApp(App)
app.use(router)
app.mount('#app')
