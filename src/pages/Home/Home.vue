<script lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import Navbar from '@/components/Navbar.component.vue';
import Hero from './sections/Hero.vue';
import Cotization from './sections/Cotization.vue';
import Places from './sections/Places.vue';
import Options from './sections/Options.vue';
import People from './sections/People.vue'
import Company from './sections/Company.vue';
import Repentance from './sections/Repentance.vue';
import Security from './sections/Security.vue';

export default {
    name: 'Home',
    components: {
        Navbar,
        Hero,
        Cotization,
        Places,
        Options,
        People,
        Company,
        Repentance,
        Security,
    },
    setup() {
        const authStore = useAuthStore();

        return { authStore };
    }
}
</script>

<template>
    <div class="w-full h-full">
        <Navbar />
        <Hero />
        <Cotization />
        <Options />
        <People />
        <Company />
        <Repentance />
        <Security />
        <Places />
    </div>
</template>
