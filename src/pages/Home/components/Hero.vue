<script lang="ts">
import { ref } from 'vue';

import LeftArrow from '@/assets/icons/LeftArrow.vue';
import RightArrow from '@/assets/icons/RightArrow.vue';
import { HeroButtons } from '@/utilities/HeroButtons.utility.ts'
import { formatTextWithLineBreaks } from '@/utilities/Text.utility.ts';

export default {
    name: 'Hero',
    components: {
        LeftArrow,
        RightArrow,
    },
    setup() {
        // Slides traidas de la utility HeroButtons
        const slides = ref(HeroButtons);
        const currentSlide = ref(0);

        const nextSlide = () => {
            currentSlide.value = (currentSlide.value + 1) % slides.value.length;
        };

        const prevSlide = () => {
            currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
        };

        
        
        return {
            slides,
            currentSlide,
            nextSlide,
            prevSlide,
            formatTextWithLineBreaks,
        };
    },
};
</script>

<template>
    <section class="relative w-full h-screen overflow-hidden" id="hero-section">
        <div 
            v-for="(slide, index) in slides" 
            :key="index" 
            :class="['absolute inset-0 bg-cover bg-center transition-opacity duration-1000', { 'opacity-0': index !== currentSlide, 'opacity-100': index === currentSlide }]" 
            :style="{ backgroundImage: `url(${slide.image})` }"
        >
            <div class="absolute inset-0"></div>
            <div class="absolute inset-0 flex items-center justify-center text-white p-4 md:justify-start md:ml-28">
                <div class="text-center md:text-start">
                    <p class="text-xl mb-6 md:text-4xl lg:text-5xl" v-html="formatTextWithLineBreaks(slide.title)"></p>
                    <p class="text-xl mb-6" v-html="formatTextWithLineBreaks(slide.text)"></p>
                    <button v-if="slide.buttonText !== ''" class="bg-primary  z-50 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
                        {{ slide.buttonText }}
                    </button>
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
