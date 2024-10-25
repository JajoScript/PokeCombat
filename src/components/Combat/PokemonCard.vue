<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types'

defineProps<{
  teamNum: string
  pokemon: Pokemon
  index: number
}>()
</script>

<template>
  <!-- Pokemon team 1: Frontal -->
  <div v-if="teamNum === '1'">
    <div v-if="pokemon.sprites.other.showdown.front_default !== null">
      <img
        :class="`pokemonCard_${index}`"
        :src="pokemon.sprites.other.showdown.front_default"
        :alt="pokemon.name"
      />
    </div>

    <div v-else>
      <img
        :class="`pokemonCard_${index}`"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
      />
    </div>
  </div>

  <!-- Pokemon team 2: De espalda -->
  <div v-else>
    <div v-if="pokemon.sprites.other.showdown.back_default !== null">
      <img
        :class="`pokemonCard_${index}`"
        :src="pokemon.sprites.other.showdown.back_default"
        :alt="pokemon.name"
      />
    </div>

    <div v-else>
      <div v-if="pokemon.sprites.back_default !== null">
        <img
          :class="`pokemonCard_${index}`"
          :src="pokemon.sprites.back_default"
          :alt="pokemon.name"
        />
      </div>

      <div v-else>
        <img
          :class="`pokemonCard_${index}`"
          :src="pokemon.sprites.front_default"
          :alt="pokemon.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemonCard_0 {
  @apply w-14 -translate-y-2;
}

.pokemonCard_1 {
  @apply w-14  translate-y-2;
}

.pokemonCard_2 {
  @apply w-14  translate-y-4;
}
</style>
