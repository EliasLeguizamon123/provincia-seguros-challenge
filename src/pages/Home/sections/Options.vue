<script lang="ts">
import Ventas from '@/assets/ventas.png';
import Siniestros from '@/assets/siniestros.png';
import Clientes from '@/assets/clientes.png';
import Pagos from '@/assets/pagos.png';

import ImageCard from '../components/ImageCard.vue'

export default {
    name: 'Options',
    components: {
        ImageCard,
    },
    setup () {
        return {
            Ventas,
            Siniestros,
            Clientes,
            Pagos
        }
    }
}
</script>

<template>
    <section id="options-section" class="w-full bg-[#5D5D5D]  grid grid-cols-1 items-center md:grid-cols-2 md:gap-0">
        <div class="w-full h-full flex flex-col items-center gap-12 py-12 sm:border-r">
            <ImageCard :src="Clientes" alt="Clientes" />
            <ImageCard :src="Siniestros" alt="Siniestros" />
        </div>
        <div class="w-full h-full flex flex-col items-center gap-12 pb-12 md:py-12">
            <ImageCard :src="Pagos" alt="Pagos" />
            <ImageCard :src="Ventas" alt="Ventas" />
        </div>
    </section>
</template>
