import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Login  from "@/pages/Login/Login.vue";
import Home from '@/pages/Home/Home.vue';
import { useAuthStore } from "@/stores/auth.store";
import Places from "@/pages/Places/Places.vue";

/**
 * Verifica si el usuario está autenticado.
 * @returns {string | null} El token de sesión si el usuario está autenticado, de lo contrario null.
 */

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

/**
 * Middleware global para verificar la autenticación antes de cada navegación.
 * Si la ruta requiere autenticación y el usuario no está autenticado, redirige a la página de inicio de sesión.
 * @param {RouteLocationNormalized} to - La ruta a la que se navega.
 * @param {RouteLocationNormalized} _from - La ruta desde la que se navega.
 * @param {Function} next - Función para continuar con la navegación.
 */
router.beforeEach((to, _from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;