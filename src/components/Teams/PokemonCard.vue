<script setup lang="ts">
import type { Pokemon } from '@/types'
import { defineProps } from 'vue'

defineProps({
  pokeball: {
    type: Number,
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
    <div v-if="pokeball === 0">
      <img
        class="size-12 z-10 shadow-lg"
        src="@/assets/asset_pokeball_left.webp"
        loading="lazy"
        alt="left pokeball"
      />
    </div>

    <div v-else-if="pokeball === 1">
      <img
        class="size-12 z-10 shadow-lg"
        src="@/assets/asset_pokeball_center.webp"
        loading="lazy"
        alt="center pokeball"
      />
    </div>

    <div v-else>
      <img
        class="size-12 z-10 shadow-lg"
        src="@/assets/asset_pokeball_right.webp"
        loading="lazy"
        alt="right pokeball"
      />
    </div>

    <div class="bg-white px-2 py-1 rounded-lg w-28 h-36">
      <img class="aspect-square z-20" :src="pokemon.sprites.front_default" />
      <p class="text-[0.5rem] text-wrap text-center">{{ pokemon.name }}</p>
    </div>
  </div>
</template>
