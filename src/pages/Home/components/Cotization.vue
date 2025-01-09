<script lang="ts">
import CellPhoneImage from '@/assets/cellphone.png';
import CotizationImage from '@/assets/cotization.jpg';

export default {
    name: 'Cotization',
    setup () {
        return {
            CellPhoneImage,
            CotizationImage,
        };
    }
}
</script>

<template>
    <section class="relative w-full h-screen overflow-hidden flex flex-col" id="cotization-section">
        <div class="w-full h-1/4 flex justify-center items-center bg-primary">
            <img :src="CellPhoneImage" alt="Contact Image" class="max-w-full max-h-full" />
        </div>
        <div 
            class="w-full h-3/4 flex flex-col items-center gap-12 p-4 bg-cover bg-center bg-fixed relative"  
            :style="{ backgroundImage: 'url(' + CotizationImage + ')' }"
        >
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <p class="text-white text-3xl relative z-10">COTIZACIÓN ONLINE</p>
            <p class="text-white z-40">Cotizá y obtené en minutos el mejor seguro para todo tu auto o moto.</p>
            <button class="bg-primary h-1/4 w-2/3 cursor-pointer z-40 md:w-1/3 hover:bg-black hover:bg-opacity-85">
                <span class="text-white text-2xl">Cotizá el seguro para tu auto</span>
            </button>
            <button class="bg-primary h-1/4 w-2/3 cursor-pointer z-40 md:w-1/3 hover:bg-black hover:bg-opacity-85">
                <span class="text-white text-2xl">Cotizá el seguro para tu moto</span>
            </button>
        </div>
    </section>
</template>