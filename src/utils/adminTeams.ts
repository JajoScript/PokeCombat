import { useTeamStore } from '@/stores/team'
import genTeamIDs from './genTeamIDs';

export default function adminTeams(action?: string): number[] {
  const store = useTeamStore()
  const teamsIDs: number[] = store.teamIDs;

  let newTeamsIDs: number[] = [];
  let actualIDs: number[] = [];

  switch (action) {
    case "GEN_TEAM_1":
      actualIDs = teamsIDs.slice(3, 6) // Actual Team 2.
      newTeamsIDs = [...genTeamIDs(), ...actualIDs]
      break;

    case "GEN_TEAM_2":
      actualIDs = teamsIDs.slice(0, 3) // Actual Team 1.
      newTeamsIDs = [...actualIDs, ...genTeamIDs()]
      break;

    default:
    case "GEN_BOTH":
      newTeamsIDs = [...genTeamIDs(), ...genTeamIDs()]
      break;
  }

  console.info(`Teams IDs: ${teamsIDs} -> ${newTeamsIDs}`)
  store.setTeamIDs(newTeamsIDs)

  return newTeamsIDs;
}