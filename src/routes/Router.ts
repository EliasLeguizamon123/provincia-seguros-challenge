import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Login  from "@/pages/Login/Login.vue";
import Home from '@/pages/Home/Home.vue';
import { useAuthStore } from "@/stores/auth.store";
import Places from "@/pages/Places/Places.vue";

const isAuthenticated = () => {
    const authStore = useAuthStore();
    return sessionStorage.getItem('token') || authStore.token;
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
    },
    {
        path: '/places',
        name: 'Places',
        component: Places,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;