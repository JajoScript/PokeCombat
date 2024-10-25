<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types'

defineProps<{
  teamNum: string
  pokemon: Pokemon
}>()
</script>

<template>
  <!-- Pokemon team 1: Frontal -->
  <div v-if="teamNum === '1'">
    <div v-if="pokemon.sprites.other.showdown.front_default !== null">
      <img
        :src="pokemon.sprites.other.showdown.front_default"
        :alt="pokemon.name"
      />
    </div>

    <div v-else>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
  </div>

  <!-- Pokemon team 2: De espalda -->
  <div v-else>
    <div v-if="pokemon.sprites.other.showdown.back_default !== null">
      <img
        :src="pokemon.sprites.other.showdown.back_default"
        :alt="pokemon.name"
      />
    </div>

    <div v-else>
      <div v-if="pokemon.sprites.back_default !== null">
        <img :src="pokemon.sprites.back_default" :alt="pokemon.name" />
      </div>

      <div v-else>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      </div>
    </div>
  </div>
</template>
