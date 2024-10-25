import { defineStore } from 'pinia'
import type { Pokemon } from '@/types/'

export const useTeamStore = defineStore('team', {
  state: () => {
    return {
      teamIDs: [] as number[],

      team_1: [] as Pokemon[],
      team_2: [] as Pokemon[]
    }
  },

  actions: {
    setTeamIDs(teamIDs: number[]) {
      this.teamIDs = teamIDs
    },


    setTeam1(team: Pokemon[]) {
      this.team_1 = team
    },
    setTeam2(team: Pokemon[]) {
      this.team_2 = team
    },
  },

  getters: {
    getTeamsIDs: (state) => state.teamIDs,

    getTeam1: (state) => state.team_1,
    getTeam2: (state) => state.team_2,
  }
})
