import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home.vue')
    },
]

const router = createRouter({
    // history: createWebHistory(),     // history：路由中不含 `#`
    history: createWebHashHistory(),    // hash：路由中附带 `#`
    routes
})

export default router
