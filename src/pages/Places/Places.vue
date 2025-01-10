<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Navbar from '@/components/Navbar.component.vue'; 
import { getPlaces } from '@/services/places.services';

export default defineComponent({
    name: 'Places',
    components: {
        Navbar,
    },
    setup() {
        const places = ref<any[]>([]);
        const loading = ref<boolean>(true);

        onMounted(async () => {
            getPlaces()
                .then((response) => {
                    places.value = response as any[];
                })
                .finally(() => {
                    loading.value = false;
                });
        });

        return {
            places,
            loading,
        };
    },
});
</script>

<template>
    <div class="w-full h-full">
        <Navbar />
        <div class="container mx-auto mt-8">
            <div v-if="loading" class="flex flex-col items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-primary border-primary" role="status"></div>
                <p class="mt-4">Buscando las direcciones más cercanas...</p>
            </div>
            <div v-else class="text-center">
                <h1 class="text-xl font-bold underline p-4">Centros de Atención</h1>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Dirección</th>
                            <th class="py-2 px-4 border-b">Povincia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="place in places" :key="place.place_id" class="text-left hover:bg-gray-100 cursor-auto hover:underline hover:text-primary">
                            <td class="py-2 px-4 border-b">{{ place.formatted_address }} - {{ place.province }}</td>
                            <td class="py-2 px-4 border-b">{{ place.province }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.spinner-border {
    border-top-color: transparent;
}
</style>