<script lang="ts">

export default {
    name: 'ImageCard',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="w-90 cursor-pointer hover:opacity-70 ease-in duration-200">
      <img :src="src" :alt="alt" class="w-full h-auto" />
    </div>
  </template>
  