import { defineStore } from 'pinia'
// import type { Pokemon } from '@/types/'

export const useTurnStore = defineStore('turn', {
  state: () => ({
    turn: 1,

    // Comienza el equipo 1.
    teamTurn: "1",

    // Indice del pokemon en el equipo.
    teamIndex: 0,

    // Turno del Pokemon.
    pokemonTurn: 0,
  }),

  actions: {
    nextTurn() {
      this.turn++

      if (this.teamTurn === "1") {
        this.teamTurn = "2"

      } else {
        this.teamTurn = "1"

        // Alternar el indice del equipo.
        if (this.teamIndex < 2) {
          this.teamIndex++
        } else if (this.teamIndex === 2) {
          this.teamIndex = 0
        }
      }
    },

    setTeamTurn(team: string) {
      this.teamTurn = team
    },

    setPokemonTurn(pokemonId: number) {
      this.pokemonTurn = pokemonId
    }
  },

  getters: {
    getTurn: (state) => state.turn,

    getTeamTurn: (state) => state.teamTurn,
    getTeamIndex: (state) => state.teamIndex,
    getPokemonTurn: (state) => state.pokemonTurn
  }
})