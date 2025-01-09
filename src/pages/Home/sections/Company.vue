<script lang="ts">
import IconButton from '../components/IconButton.vue';
import { companyIconButtons } from '@/utilities/Buttons.utility';

export default {
    name: 'Company',
    components: {
        IconButton
    },
    setup () {
        return {
            companyIconButtons
        }
    }
}

</script>

<template>
    <section id="company-section" class="w-full h-full text-center p-12 bg-[#F9F9F9] border border-gray-300">
        <h1 class="text-3xl p-2 text-gray-700">EMPRESAS</h1>
        <p class="text-sm">Tenemos una amplia gama de coberturas a disposición de cualquier tipo de empresa. En Provincia Seguros nos ocupamos de resguardar los valores de las compañías para que estas solo se enfoquen en seguir creciendo. </p>
        <div class="grid grid-cols-1 gap-4 px-40 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div v-for="button in companyIconButtons" :key="button.title" class="flex items-center">
                <IconButton :icon="button.icon" :title="button.title" :text="button.text" />
            </div>
        </div>
    </section>
</template>