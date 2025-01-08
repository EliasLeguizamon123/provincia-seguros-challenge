<script lang="ts">
import { ref } from 'vue';

import LeftArrow from '../../../assets/icons/LeftArrow.vue';
import RightArrow from '../../../assets/icons/RightArrow.vue';

export default {
    name: 'Hero',
    components: {
        LeftArrow,
        RightArrow,
    },
    setup() {
        const slides = ref([
            { 
                title: 'COTIZÁ Y CONTRATÁ TU \nSEGURO PARA TU HOGAR \nDE MAMERA FÁCIL Y RÁPIDA', 
                text: '',
                buttonText: 'Cotizá acá',
                image: new URL('../../../assets/hero1.jpg', import.meta.url).href
            },
            { 
                title: 'Descubre nuestros servicios', 
                text: 'Servicios que mejorarán tu experiencia.\nNo pierdas la oportunidad de conocerlos.',
                buttonText: 'Ver más',
                image: new URL('../../../assets/hero2.jpg', import.meta.url).href
            },
            { 
                title: 'Conoce a nuestro equipo', 
                text: 'Somos un grupo de profesionales apasionados por lo que hacemos.\nÚnete a nosotros.',
                buttonText: 'Conocer más',
                image: new URL('../../../assets/hero3.jpg', import.meta.url).href
            },
        ]);
        const currentSlide = ref(0);

        const nextSlide = () => {
            currentSlide.value = (currentSlide.value + 1) % slides.value.length;
        };

        const prevSlide = () => {
            currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
        };

        // Función para convertir los saltos de línea en <br>
        const formatTextWithLineBreaks = (text: string) => {
            return text.replace(/\n/g, '<br/>');
        };

        return {
            slides,
            currentSlide,
            nextSlide,
            prevSlide,
            formatTextWithLineBreaks, // Exponer la función
        };
    },
};
</script>

<template>
    <section class="relative w-full h-screen overflow-hidden">
        <div 
            v-for="(slide, index) in slides" 
            :key="index" 
            :class="['absolute inset-0 bg-cover bg-center transition-opacity duration-1000', { 'opacity-0': index !== currentSlide, 'opacity-100': index === currentSlide }]" 
            :style="{ backgroundImage: `url(${slide.image})` }"
        >
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <div class="absolute inset-0 flex items-center justify-center text-white p-4">
                <div class="text-center">
                    <!-- Usar la función formatTextWithLineBreaks para mostrar el título con saltos de línea -->
                    <p class="text-4xl mb-4" v-html="formatTextWithLineBreaks(slide.title)"></p>
                    <!-- Usar la función formatTextWithLineBreaks para mostrar el texto con saltos de línea -->
                    <p class="text-xl mb-4" v-html="formatTextWithLineBreaks(slide.text)"></p>
                    <button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-80">{{ slide.buttonText }}</button>
                </div>
            </div>
        </div>
        <button 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-70" 
            @click="prevSlide"
        >
            <LeftArrow class="w-5 h-5" />
        </button>
        <button 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-70" 
            @click="nextSlide"
        >
            <RightArrow class="w-5 h-5" />
        </button>
    </section>
</template>
