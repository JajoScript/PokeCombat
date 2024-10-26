<script setup lang="ts">
import { onMounted } from 'vue'
import TeamDisplay from './TeamDisplay.vue'
import { useTeamStore } from '@/stores/team'
import { useTurnStore } from '@/stores/turn'
import type { PokeStats } from '@/types'

const teamStore = useTeamStore()
const turnStore = useTurnStore()

// *-- 1. Manejo del estado.
// *-- 2. Ciclo de vida.
onMounted(() => {
  // El primer pokemon en atacar es el primero del equipo 1 (Superior).
  const pokemonId: number | undefined = teamStore.getTeam1[0]?.id
  if (pokemonId === undefined) return

  turnStore.setPokemonTurn(pokemonId)

  /*
    Inicio:
    Turno: 1

    Equipo: 1
    Indice: 0
    Pokemon-ID: 0
  */
})

// *-- 3. Metodos.
function onNextTurn() {
  // Atacar al equipo contrario.
  const atacanteId: number = turnStore.getPokemonTurn
  console.info('Pokemon Atacante: ', atacanteId)

  if (turnStore.getTeamTurn === '1') {
    const atacanteStats: PokeStats | undefined = teamStore.getTeamStats1.find(
      poke => poke.pokemonId === atacanteId,
    )

    if (atacanteStats) {
      console.info('STATS Pokemon Atacante: ', atacanteStats)

      teamStore.getTeam2.forEach((poke, index) => {
        console.info('Pokemon Defensor: ', poke.id)
        teamStore.getTeamStats2[index].hp -= atacanteStats.attack
      })
    }
  } else {
    const atacanteStats: PokeStats | undefined = teamStore.getTeamStats2.find(
      poke => poke.pokemonId === atacanteId,
    )

    if (atacanteStats) {
      console.info('STATS Pokemon Atacante: ', atacanteStats)

      teamStore.getTeam1.forEach((poke, index) => {
        console.info('Pokemon Defensor: ', poke.id)
        teamStore.getTeamStats1[index].hp -= atacanteStats.attack
      })
    }
  }

  // Siguiente turno.
  const index: number = turnStore.getTeamIndex

  if (turnStore.getTeamTurn == '1') {
    turnStore.setTeamTurn('2')

    turnStore.setPokemonTurn(teamStore.getTeam2[index].id)
  } else {
    // -- 1. Alternar el indice.
    if (index < 2) {
      turnStore.setTeamIndex(index + 1)
    } else {
      turnStore.setTeamIndex(0)
    }

    turnStore.setTeamTurn('1')
    turnStore.setPokemonTurn(teamStore.getTeam1[index].id)
  }

  turnStore.setTurn(turnStore.getTurn + 1)
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
