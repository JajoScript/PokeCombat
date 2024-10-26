<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types'
import { useTurnStore } from '@/stores/turn'

// *-- 1. Manejo del estado.
const store = useTurnStore()

defineProps<{
  teamNum: string
  pokemon: Pokemon
  index: number
}>()

// *-- 2. Ciclo de vida.
// *-- 3. Metodos.
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <!-- Hand Picker.-->
    <img
      :class="`w-6 mb-4 ${store.getPokemonTurn == pokemon.id && store.getTeamTurn == teamNum ? 'visible' : 'hidden'} `"
      src="@/assets/asset_hand.webp"
    />

    <!-- Pokemon team 1: Frontal -->
    <div v-if="teamNum === '1'">
      <div v-if="pokemon.sprites.other.showdown.front_default !== null">
        <img
          class="w-14"
          :src="pokemon.sprites.other.showdown.front_default"
          :alt="pokemon.name"
        />
      </div>

      <div v-else>
        <img
          class="w-14"
          :src="pokemon.sprites.front_default"
          :alt="pokemon.name"
        />
      </div>
    </div>

    <!-- Pokemon team 2: De espalda -->
    <div v-else>
      <div v-if="pokemon.sprites.other.showdown.back_default !== null">
        <img
          class="w-14"
          :src="pokemon.sprites.other.showdown.back_default"
          :alt="pokemon.name"
        />
      </div>

      <div v-else>
        <div v-if="pokemon.sprites.back_default !== null">
          <img
            class="w-14"
            :src="pokemon.sprites.back_default"
            :alt="pokemon.name"
          />
        </div>

        <div v-else>
          <img
            class="w-14"
            :src="pokemon.sprites.front_default"
            :alt="pokemon.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>
