<script lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';

import NavbarLogo from '@/assets/navbarLogo.png';
import LogOutIcon from '@/assets/icons/LogOut.icon.vue';

export default {
    name: 'Navbar',
    components: {
        LogOutIcon,
    },
    setup() {
        /**
         * `router` permite la navegación entre diferentes rutas de la aplicación.
         */
        const router = useRouter();
        
        /**
         * `authStore` proporciona acceso a los datos de autenticación del usuario.
         */
        const authStore = useAuthStore();

        /**
         * Navega a la página de inicio de sesión y limpia los datos de autenticación.
         */
        const navigateToLogin = () => {
            router.push('/login');
            authStore.clearAuthData();
            sessionStorage.clear();
        };

        /**
         * Navega a la página de lugares (Sucursales).
         */
        const navigateToPlaces = () => {
            router.push('/places');
        }

        /**
         * Navega a la página de inicio.
         */
        const navigateToHome = () => {
            router.push('/');
        }
        
        return {
            NavbarLogo,
            navigateToLogin,
            navigateToPlaces,
            navigateToHome,
            authStore,

        };
    }
}
</script>

<template>
    <nav class="w-full h-20 p-2 shadow-md bg-white flex justify-between items-center sticky top-0 z-50 md:px-24">
        <img @click="navigateToHome()" :src="NavbarLogo" alt="Logo" class="cursor-pointer w-1/6" />
        <div class="w-2/3 flex justify-center items-end md:gap-4 md:pr-2">
            <span @click="navigateToPlaces()" class="cursor-pointer hover:text-primary">Sucursales</span>
        </div>

        <h1 class="text-xl font-bold hidden md:block"> ¡Hola {{ authStore.loginData?.username }}!</h1>
        <button aria-label="Salir" @click="navigateToLogin" class="bg-primary text-white p-2 rounded-lg flex direction-row items-center gap-2 hover:bg-black hover:bg-opacity-40">
            <span class="hidden sm:block ">Salir</span>
            <LogOutIcon class="w-6 h-6" />
        </button>
    </nav>
</template>
