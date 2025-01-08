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

        const navigateToLogin = () => {
            router.push('/login');
            authStore.clearAuthData();
        };

        const navigateToSection = (sectionId: string) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        return {
            NavbarLogo,
            navigateToLogin,
            navigateToSection,
            authStore,
        };
    }
}
</script>

<template>
    <nav class="w-full h-20 p-2 shadow-md bg-white flex justify-between items-center sticky top-0 z-50 md:px-24">
        <img @click="navigateToSection('hero-section')" :src="NavbarLogo" alt="Logo" class="cursor-pointer"/>
        <div class="w-2/3 flex justify-center items-end md:gap-4 md:pr-2">
            <span @click="navigateToSection('places-section')" class="cursor-pointer hover:text-primary">Sucursales</span>
            <span @click="navigateToSection('cotization-section')" class="cursor-pointer hover:text-primary">Cotizaciones</span>
        </div>

        <h1 class="text-xl font-bold hidden md:block"> ¡Hola {{ authStore.loginData.username }}!</h1>
        <button @click="navigateToLogin" class="bg-primary text-white p-2 rounded-lg flex direction-row items-center gap-2 hover:bg-black hover:bg-opacity-40">
            <span class="hidden sm:block ">Salir</span>
            <LogOutIcon class="w-6 h-6" />
        </button>
    </nav>
</template>
