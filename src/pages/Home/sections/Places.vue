<script lang="ts">
import { useRouter } from 'vue-router';

export default {
    name: 'Places',
    setup () {
        const router = useRouter();
        
        const navigateToPlaces = () => {
            router.push('/places');
        }

        return {
            navigateToPlaces,
        };
    }
}
</script>

<template>
    <section class="w-full h-96 bg-[#F9F9F9] border border-gray-200" id="places-section">
        <div class="flex flex-col items-center h-full p-12">
            <h1 class="text-4xl">Centros de atención</h1>
            <div class="flex flex-row items-center mt-4 gap-12">
                <p>Hacé click y encontrá el Centro de Atenciòn de Provincia Seguros más cercano.</p>
                <button @click="navigateToPlaces()" class="bg-primary w-1/3 text-white p-2 rounder-sm hover:bg-black hover:bg-opacity-40">Buscar Sede</button>
            </div>
        </div>
    </section>
</template>