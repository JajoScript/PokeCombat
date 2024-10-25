<script setup lang="ts">
import { onMounted } from 'vue'
import { useTeamStore } from '@/stores/team'
import { adminTeams, getPokeTeams } from '@/utils'
import { TeamContainer } from '@/components/Teams/'
import BaseLayout from '@/layouts/BaseLayout.vue'
import type { Pokemon } from '@/types/'

// -- * 1. Estado del componente.
const store = useTeamStore()

// -- * 2. Ciclo de vida.

onMounted(async () => {
  console.info('on MOUNTED')

  await onGenerateTeams()
})

// -- * 3. Metodos.
async function onGenerateTeams(action: string = '') {
  const store = useTeamStore()

  const newTeamIDs: number[] = adminTeams(action)
  const newPokeTeams: Pokemon[] = await getPokeTeams(newTeamIDs)

  store.setTeam1(newPokeTeams.slice(0, 3))
  store.setTeam2(newPokeTeams.slice(3, 6))
}
</script>

<template>
  <BaseLayout>
    <section class="base_container">
      <div class="mb-4">
        <h1 class="text-3xl font-bold tracking-wide">
          ¡Bienvenido a PokeCombat!
        </h1>
        <p class="text-base text-slate-900/80">
          Selecciona a 3 Pokemons por equipo. Estos serán elegidos al azar.
        </p>
        <p class="text-base text-slate-900/80">¡Mucha suerte!</p>
      </div>

      <!-- Equipos Pokemon -->
      <div class="teams_container">
        <TeamContainer :teamNum="'1'" :team="store.team_1" />
        <TeamContainer :teamNum="'2'" :team="store.team_2" />
      </div>

      <!-- Botones de acción -->
      <div class="inline-flex">
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          @click="() => onGenerateTeams()"
        >
          🎲 Cambiar equipos
        </button>

        <RouterLink to="/combat">
          <button
            id="btnStartCombat"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Iniciar combate
          </button>
        </RouterLink>
      </div>
    </section>
  </BaseLayout>
</template>

<style>
.base_container {
  @apply w-full h-screen;
  @apply flex flex-col items-center justify-center;
  /* @apply border border-gray-500; */
}

.teams_container {
  /* @apply border border-gray-500; */
  @apply flex flex-col gap-x-4;
}
</style>
