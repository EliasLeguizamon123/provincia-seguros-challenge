<script lang="ts">
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="border border-primary p-2 flex items-center">
    <component :is="icon" class="mr-2" />
    <div>
      <h3 class="font-bold">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
