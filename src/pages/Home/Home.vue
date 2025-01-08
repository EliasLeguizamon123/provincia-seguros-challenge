<script lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.store.ts';
import Navbar from '../../components/Navbar.component.vue'
import Hero from './components/Hero.vue';
import Cotization from './components/Cotization.vue';
import Places from './components/Places.vue';

export default {
    name: 'Home',
    components: {
        Navbar,
        Hero,
        Cotization,
        Places,
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
        <Places />
    </div>
</template>
