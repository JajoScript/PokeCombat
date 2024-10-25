<script setup lang="ts">
import { defineProps } from 'vue'
import { adminTeams, getPokeTeams } from '@/utils'
import { useTeamStore } from '@/stores/team'
import MemberInfo from './MemberInfo.vue'
import type { Pokemon } from '@/types'

// -- * 1. Estado del componente.
const store = useTeamStore()
const props = defineProps({
  teamNum: {
    type: String,
    required: true,
    default: '0',
  },
  team: {
    type: Array as () => Pokemon[],
    required: true,
    default: () => [],
  },
})

// -- * 2. Ciclo de vida.
// -- * 3. Metodos.
async function onRandomize() {
  const newTeamIDs: number[] = adminTeams(`GEN_TEAM_${props.teamNum}`)
  const newPokeTeams: Pokemon[] = await getPokeTeams(newTeamIDs)

  store.setTeam1(newPokeTeams.slice(0, 3))
  store.setTeam2(newPokeTeams.slice(3, 6))
}
</script>

<template>
  <div :class="`team_container team_${teamNum}`">
    <!-- Pokemon icon -->
    <img src="@/assets/pokeball.svg" loading="lazy" class="icon" />

    <!-- Equipo pokemon -->
    <div class="flex flex-col items-start">
      <h2 class="team_title">Equipo {{ teamNum }}</h2>

      <div class="pokemon_group">
        <div v-for="pokemon in team" :key="pokemon.id">
          <MemberInfo :pokemon="pokemon" />
        </div>
      </div>
    </div>

    <button
      type="button"
      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      @click="() => onRandomize()"
    >
      🎲 Cambiar equipos
    </button>
  </div>
</template>

<style scoped>
.team_container {
  @apply min-w-[700px] min-h-[200px] p-4;
  @apply flex flex-row gap-x-2 items-center justify-center;
  @apply rounded-l-full rounded-md;
  @apply mb-4;
  @apply relative;
}

.team_1 {
  @apply bg-white;
  @apply border-4 border-red-500/90;
}

.team_2 {
  @apply bg-white;
  @apply border-4 border-blue-500;
}

.team_title {
  @apply text-base text-slate-950 font-bold;
  @apply mb-4;
}

.icon {
  @apply absolute -left-[45px];
  @apply size-28 p-4;
  @apply bg-slate-900;
  @apply flex-1 flex justify-center items-center;
  @apply rounded-full;
}

.pokemon_group {
  @apply flex-auto;
  @apply w-full;
  /* @apply border border-gray-500; */
  @apply flex flex-row gap-x-6 justify-center;
}
</style>
