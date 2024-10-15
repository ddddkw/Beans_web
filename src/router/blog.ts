import {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/BlogHome/index.vue')
    },
]


export default routes
