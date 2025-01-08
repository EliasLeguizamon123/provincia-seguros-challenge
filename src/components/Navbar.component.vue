<script lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

import NavbarLogo from '../assets/navbarLogo.png';
import LogOutIcon from '../assets/icons/LogOutIcon.vue';

export default {
    name: 'Navbar',
    components: {
        LogOutIcon,
    },
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();

        const navigateToHome = () => {
            router.push('/');
        };

        const navigateToLogin = () => {
            router.push('/login');
            authStore.clearAuthData();
        };

        const navigateToPlaces = () => {
            console.log('Navigate to places');
            router.push('/places');
        };
        return {
            NavbarLogo,
            navigateToHome,
            navigateToLogin,
            navigateToPlaces,
            authStore,
        };
    }
}
</script>

<template>
    <nav class="w-full h-20 p-2 shadow-md  flex justify-between items-center position-fixed top-0 z-50 md:px-24">
        <img :src="NavbarLogo" alt="Logo" class="cursor-pointer" @click="navigateToHome" />
        <div class="w-2/3 flex justify-center items-end md:gap-4 md:pr-2">
            <span @click="navigateToPlaces" class="cursor-pointer hover:text-primary">Sucursales</span>
        </div>

        <h1 class="text-xl font-bold hidden md:block"> ¡Hola {{ authStore.loginData.username }}!</h1>
        <button @click="navigateToLogin" class="bg-primary text-white p-2 rounded-lg flex direction-row items-center gap-2">
            <span class="hidden sm:block">Salir</span>
            <LogOutIcon class="w-6 h-6" />
        </button>
    </nav>
</template>
