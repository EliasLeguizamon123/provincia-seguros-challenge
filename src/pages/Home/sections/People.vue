<script lang="ts">

import { personsIconButtons } from '@/utilities/Buttons.utility';
import IconButton from '../components/IconButton.vue';

export default {
    name: 'People',
    components: {
        IconButton
    },
    setup () {
        return {
            personsIconButtons
        }
    }
}

</script>

<template>
    <section id="people-section" class="w-full h-full text-center p-12">
        <h1 class="text-3xl p-2 text-gray-700">PERSONAS</h1>
        <p class="text-sm">En Provincia Seguros tenemos diferentes propuestas para cada individuo.</p>
        <div class="grid grid-cols-1 gap-4 px-40 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div v-for="button in personsIconButtons" :key="button.title" class="flex items-center">
                <IconButton :icon="button.icon" :title="button.title" :text="button.text" />
            </div>
        </div>

    </section>
</template>