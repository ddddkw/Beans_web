import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { registerMicroApps, start } from 'qiankun'
import * as Icons from '@element-plus/icons-vue' // 引入所有图标，并命名为 Icons
import http from "@/utils/request";
// 注册微应用
registerMicroApps([
    {
        name: 'tools_web', //子应用的名称
        entry: '//localhost:3099', //子项目启动后的地址
        container: '#container', //加载的容器
        activeRule: '/tools_web' //匹配的路由
    }
])
// 启动 qiankun
start()
const app = createApp(App)

for (let i in Icons) {
    app.component(i, Icons[i])
}
app.use(router)
app.config.globalProperties.$http=http
app.mount('#app')
