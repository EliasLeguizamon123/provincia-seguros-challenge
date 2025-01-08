<script lang="ts">
export default {
    name: 'Places',
}
</script>

<template>
    <section class="w-full h-screen bg-[#F9F9F9]" id="places-section">
        <div class="flex flex-col items-center h-full pt-12">
            <h1 class="text-4xl font-bold">Centros de atención</h1>
            <div class="flex flex-row items-center mt-4 gap-12">
                <p>Hacé click y encontrá el Centro de Atenciòn de Provincia Seguros más cercano.</p>
                <button class="bg-primary w-1/3 text-white p-2 rounder-sm">Buscar Sede</button>
            </div>
        </div>
    </section>
</template>