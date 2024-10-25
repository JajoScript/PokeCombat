<script setup lang="ts">
import type { Pokemon } from '@/types'
import { defineProps } from 'vue'

defineProps({
  pokeball: {
    type: String,
    required: true,
  },
  pokemon: {
    type: Object as () => Pokemon,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img
      class="size-12 z-10 shadow-lg"
      :src="`./src/assets/asset_pokeball_${pokeball}.webp`"
      loading="lazy"
      :alt="pokeball"
    />

    <div class="bg-white px-2 py-1 rounded-lg w-28 h-36">
      <img class="aspect-square z-20" :src="pokemon.sprites.front_default" />
      <p class="text-[0.5rem] text-wrap text-center">{{ pokemon.name }}</p>
    </div>
  </div>
</template>
