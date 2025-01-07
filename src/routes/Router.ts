import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Login  from "../pages/Login/Login.vue";
import Home from '../pages/Home/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;