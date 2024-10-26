import { defineStore } from 'pinia'
import type { Pokemon, PokeStats } from '@/types/'

export const useTeamStore = defineStore('team', {
  state: () => {
    return {
      teamIDs: [] as number[],

      team_1: [] as Pokemon[],
      teamStats_1: [] as PokeStats[],

      team_2: [] as Pokemon[],
      teamStats_2: [] as PokeStats[],
    }
  },

  actions: {
    setTeamIDs(teamIDs: number[]) {
      this.teamIDs = teamIDs
    },


    setTeam1(team: Pokemon[]) {
      this.team_1 = team
    },
    setTeamStats1(stats: PokeStats[]) {
      this.teamStats_1 = stats
    },

    setTeam2(team: Pokemon[]) {
      this.team_2 = team
    },
    setTeamStats2(stats: PokeStats[]) {
      this.teamStats_2 = stats
    }
  },

  getters: {
    getTeamsIDs: (state) => state.teamIDs,

    getTeam1: (state) => state.team_1,
    getTeamStats1: (state) => state.teamStats_1,

    getTeam2: (state) => state.team_2,
    getTeamStats2: (state) => state.teamStats_2
  }
})
