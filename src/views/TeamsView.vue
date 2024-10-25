<script setup lang="ts">
import { onMounted } from 'vue'
import { useTeamStore } from '@/stores/team'
import { adminTeams, getPokeTeams } from '@/utils'
import { PokemonStarters } from '@/components/Teams/'
import BaseLayout from '@/layouts/BaseLayout.vue'
import type { Pokemon } from '@/types/'

// -- * 1. Estado del componente.
const store = useTeamStore()

// -- * 2. Ciclo de vida.
onMounted(async () => {
  await onGenerateTeams()
})

// -- * 3. Metodos.
async function onGenerateTeams(action: string = '') {
  const newTeamIDs: number[] = adminTeams(action)
  const newPokeTeams: Pokemon[] = await getPokeTeams(newTeamIDs)

  store.setTeam1(newPokeTeams.slice(0, 3))
  store.setTeam2(newPokeTeams.slice(3, 6))
}
</script>

<template>
  <BaseLayout>
    <main class="flex flex-col items-center justify-start mt-8 w-full h-svh">
      <!-- Info -->
      <div
        class="bg-slate-400/80 px-4 py-2 mb-4 max-w-[600px] w-full rounded-md"
      >
        <h1 class="text-xl text-white">Bienvenido a PokeCombat</h1>
        <p class="text-[0.6rem] text-white">
          Elige a dos equipos de 3 Pokemons para comenzar la batalla.
        </p>
      </div>

      <!-- Team 1 -->
      <PokemonStarters teamNum="1" :team="store.getTeam1" />

      <!-- Team 2 -->
      <PokemonStarters teamNum="2" :team="store.getTeam2" />

      <!-- Actions -->
      <div
        class="inline-flex justify-end items-center gap-x-4 max-w-[600px] w-full"
      >
        <button
          type="button"
          class="text-white text-[0.6rem] bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-2 py-2 me-2 mb-2 focus:outline-none"
          @click="() => onGenerateTeams()"
        >
          Cambiar equipos
        </button>

        <RouterLink to="/combat">
          <button
            id="btnStartCombat"
            type="button"
            class="text-white text-[0.6rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-2 me-2 mb-2 focus:outline-none"
          >
            Iniciar combate
          </button>
        </RouterLink>
      </div>
    </main>
  </BaseLayout>
</template>

<style scoped></style>
