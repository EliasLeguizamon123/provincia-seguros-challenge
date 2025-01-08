import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Login  from "../pages/Login/Login.vue";
import Home from '../pages/Home/Home.vue';

const isAuthenticated = () => {
    return !!sessionStorage.getItem('token');
};

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;