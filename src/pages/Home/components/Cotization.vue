<script lang="ts">
import CellPhoneImage from '../../../assets/cellphone.png';
import CotizationImage from '../../../assets/cotization.jpg';

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
    <section class="relative w-full h-screen overflow-hidden flex flex-col">
        <!-- Contact Section -->
        <div class="w-full h-1/4 flex justify-center items-center bg-primary">
            <img :src="CellPhoneImage" alt="Contact Image" class="max-w-full max-h-full" />
        </div>
        <div 
            class="w-full h-3/4 flex flex-col items-center gap-4 p-4 bg-cover bg-center bg-fixed relative"  
            :style="{ backgroundImage: 'url(' + CotizationImage + ')' }"
        >
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <p class="text-white text-3xl relative z-10">COTIZACIÓN ONLINE</p>
        </div>
    </section>
</template>