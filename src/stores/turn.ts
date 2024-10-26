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
    setTurn(turn: number) {
      console.info("[SET] Turn: ", turn)
      this.turn = turn
    },

    setTeamTurn(team: string) {
      console.info("[SET] TEAM Turn: ", team)
      this.teamTurn = team
    },

    setTeamIndex(index: number) {
      console.info("[SET] Team Index: ", index)
      this.teamIndex = index
    },

    setPokemonTurn(pokemonId: number) {
      console.info("[SET] Pokemon Turn: ", pokemonId)
      this.pokemonTurn = pokemonId
    },
  },

  getters: {
    getTurn: (state) => state.turn,

    getTeamTurn: (state) => state.teamTurn,
    getTeamIndex: (state) => state.teamIndex,
    getPokemonTurn: (state) => state.pokemonTurn
  }
})