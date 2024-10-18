import {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/BlogHome/index.vue')
    },
    {
        path: '/addBlog',
        name: 'addBlog',
        component: () => import('@/views/addBlog/index.vue')
    },
]


export default routes
