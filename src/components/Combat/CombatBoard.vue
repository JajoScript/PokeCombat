<script setup lang="ts">
import { onMounted } from 'vue'
import TeamDisplay from './TeamDisplay.vue'
import { useTeamStore } from '@/stores/team'
import { useTurnStore } from '@/stores/turn'

const teamStore = useTeamStore()
const turnStore = useTurnStore()

// *-- 1. Manejo del estado.
// *-- 2. Ciclo de vida.
onMounted(() => {
  // El primer pokemon en atacar es el primero del equipo 1 (Superior).
  const pokemonId: number | undefined = teamStore.getTeam1[0]?.id

  if (pokemonId === undefined) return

  turnStore.setPokemonTurn(pokemonId)
})

// *-- 3. Metodos.
function onNextTurn() {
  turnStore.nextTurn()

  const index: number = turnStore.getTeamIndex

  let pokeId: number
  if (turnStore.getTeamTurn === '1') {
    pokeId = teamStore.getTeam1[index].id
  } else {
    pokeId = teamStore.getTeam2[index].id
  }

  turnStore.setPokemonTurn(pokeId)
}
</script>

<template>
  <section class="flex flex-col gap-y-4">
    <!-- TEAM 1 Display -->
    <TeamDisplay :teamNum="'1'" :team="teamStore.team_1" />

    <!-- TEAM 2 Display -->
    <TeamDisplay :teamNum="'2'" :team="teamStore.team_1" />

    <!-- Boton de acción -->
    <div class="flex flex-row justify-end items-center gap-x-4">
      <h3 class="text-[0.6rem]">Turno: {{ turnStore.getTurn }}</h3>

      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-[0.5rem] px-5 py-2.5 me-2 mb-2 focus:outline-none"
        @click="() => onNextTurn()"
      >
        Siguiente turno
      </button>
    </div>
  </section>
</template>
