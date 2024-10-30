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
        component: () => import('@/views/addBlog/components/add.vue')
    },
]


export default routes
