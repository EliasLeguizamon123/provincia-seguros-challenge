<script lang="ts">
import { ref, onMounted } from 'vue';
import { tips } from '@/utilities/Tips.utility';
import { formatTextWithLineBreaks } from '@/utilities/Text.utility';
import Street from '@/assets/street.png';

export default {
    name: "Security",
    setup() {
        const currentTip = ref(formatTextWithLineBreaks(tips[0]));
        let tipIndex = 0;
        const direction = ref('');

        /**
         * Actualiza el consejo de seguridad actual al siguiente en la lista.
         */
        const updateTip = () => {
            direction.value = 'next';
            tipIndex = (tipIndex + 1) % tips.length;
            currentTip.value = formatTextWithLineBreaks(tips[tipIndex]);
        };

        /**
         * Muestra el siguiente consejo de seguridad y establece la dirección de transición a "next".
         */
        const showNextTip = () => {
            direction.value = 'next';
            tipIndex = (tipIndex + 1) % tips.length;
            currentTip.value = formatTextWithLineBreaks(tips[tipIndex]);
        };

        /**
         * Muestra el consejo de seguridad anterior y establece la dirección de transición a "prev".
         */
        const showPreviousTip = () => {
            direction.value = 'prev';
            tipIndex = (tipIndex - 1 + tips.length) % tips.length;
            currentTip.value = formatTextWithLineBreaks(tips[tipIndex]);
        };

        /**
         * Se ejecuta al montar el componente y actualiza el consejo de seguridad cada 6 segundos.
         */
        onMounted(() => {
            setInterval(updateTip, 6000);
        });

        return {
            currentTip,
            showNextTip,
            showPreviousTip,
            Street,
            direction,
        };
    },
};
</script>

<template>
    <section class="w-full text-center border border-gray-300 min-h-80 p-12 relative">
        <div 
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${Street})`, filter: 'blur(8px)' }"
        ></div>
        <div class="absolute inset-0 bg-black opacity-70"></div>
        <div class="relative z-10">
            <h1 class="text-3xl p-2 text-white pb-8">CONSEJOS DE SEGURIDAD</h1>
            <transition :name="direction === 'next' ? 'slide-right' : 'slide-left'" mode="out-in">
                <p class="p-2 text-white" v-html="currentTip" :key="currentTip"></p>
            </transition>
            <div class="flex justify-center mt-4 gap-4">
                <button @click="showPreviousTip" class="text-white bg-primary size-8 hover:bg-black hover:opacity-80">
                    &#8592;
                </button>
                <button @click="showNextTip" class="text-white bg-primary size-8 hover:bg-black hover:opacity-80">
                    &#8594;
                </button>
            </div>
        </div>
    </section>
</template>



<style scoped>
.slide-right-enter-active, .slide-right-leave-active,
.slide-left-enter-active, .slide-left-leave-active {
    transition: transform 0.3s ease;
}

.slide-right-enter, .slide-left-leave-to {
    transform: translateX(100%);
}

.slide-right-leave-to, .slide-left-enter {
    transform: translateX(-100%);
}
</style>
