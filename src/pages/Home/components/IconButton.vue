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
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
    <div class="flex flex-col items-center cursor-pointer group">
        <div class="bg-white border-2 border-primary rounded size-44 justify-center items-center flex group-hover:border-gray-500">
            <component :is="icon" class="w-20 h-20 mx-auto mb-4 text-primary group-hover:text-gray-500" />
        </div>
        <div clas="text-center">
              <h3 class="text-2xl text-primary group-hover:underline">{{ title }}</h3>
              <p class="text-primary text-sm group-hover:underline">{{ text }}</p>
        </div>
    </div>
</template>
