<script lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import Navbar from '@/components/Navbar.component.vue';
import Hero from './sections/Hero.vue';
import Cotization from './sections/Cotization.vue';
import Places from './sections/Places.vue';
import Options from './sections/Options.vue';
import People from './sections/People.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        Hero,
        Cotization,
        Places,
        Options,
        People,
    },
    setup() {
        const authStore = useAuthStore();

        // // Estado para almacenar los resultados de las sucursales
        // const places = ref<any[]>([]);
        // const loading = ref(false);

        // const API_KEY = 'TU_CLAVE_DE_API'; // Reemplaza con tu clave de API
        // const query = 'Provincia Seguros, Buenos Aires, Argentina'; // Término de búsqueda

        // const getPlaces = async () => {
        //     const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${import.meta.env.VITE_MAPS_TOKEN}`;
        //     try {
        //         const response = await fetch(url);
        //         const data = await response.json();
        //         return data;
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //         return null;
        //     }
        // };

        // getPlaces().then(data => {
        //     console.log(data);
        // });

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
        <Places />
    </div>
</template>
