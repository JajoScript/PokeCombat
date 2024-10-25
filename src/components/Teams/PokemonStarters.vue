<script setup lang="ts">
import { defineProps } from 'vue'
import { useTeamStore } from '@/stores/team'
import type { Pokemon } from '@/types/'
import PokemonCard from './PokemonCard.vue'
import { adminTeams, getPokeTeams } from '@/utils'

// *-- 1. Manejo del estado.
const props = defineProps<{
  teamNum: string
  team: Pokemon[]
}>()

const store = useTeamStore()

// *-- 2. Ciclo de vida.
// *-- 3. Metodos.
async function onRandomize() {
  const newTeamIDs: number[] = adminTeams(`GEN_TEAM_${props.teamNum}`)
  const newPokeTeams: Pokemon[] = await getPokeTeams(newTeamIDs)

  store.setTeam1(newPokeTeams.slice(0, 3))
  store.setTeam2(newPokeTeams.slice(3, 6))
}
</script>

<template>
  <!-- Equipo pokemon -->
  <div
    :class="`team_container_${teamNum} w-[600px] min-h-[300px] rounded-xl relative mx-auto drop-shadow-lg mb-4 flex flex-col items-center justify-center`"
  >
    <!-- Bag icon -->
    <img
      :class="`bag_icon_${teamNum}`"
      src="@/assets/sprite_bag.webp"
      loading="lazy"
    />
    <h2
      :class="`text-slate-800 absolute -top-4 bg-white px-2 py-1 rounded-md text-sm title_team_${teamNum}`"
    >
      Equipo {{ teamNum }}
    </h2>

    <!-- Pokeballs -->
    <div class="flex flex-row justify-evenly w-full items-end mt-16">
      <div v-for="(pokemon, index) in team" :key="index">
        <PokemonCard :pokeball="index" :pokemon="pokemon" />
      </div>
    </div>

    <!-- Button Randomize -->
    <button
      class="absolute top-[40%] -right-[6%] bg-white hover:bg-gray-400 rounded-full p-4 text-center border-4 border-gray-300 text-2xl"
      @click="() => onRandomize()"
    >
      🎲
    </button>
  </div>
</template>

<style scoped>
.team_container_1 {
  @apply bg-[url('@/assets/asset_grass_starter.webp')] bg-cover bg-center;
  @apply border-4 border-red-500;
}

.team_container_2 {
  @apply bg-[url('@/assets/asset_grass_starter.webp')] bg-cover bg-center;
  @apply border-4 border-blue-500;
}

.bag_icon_1 {
  @apply absolute w-48 -top-[5%] -right-[10%] z-10;
}

.bag_icon_2 {
  @apply absolute w-48 -top-[5%] -left-[10%] z-10 transform -scale-x-100;
}

.title_team_1 {
  @apply bg-red-500 left-[50%] -top-2 transform -translate-x-1/2;
}

.title_team_2 {
  @apply bg-blue-500 right-[50%] -top-2 transform translate-x-1/2;
}
</style>
