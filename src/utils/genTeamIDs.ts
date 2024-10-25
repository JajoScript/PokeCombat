import genRandomID from "./genRandomID"
import { useTeamStore } from '@/stores/team'

export default function genTeamIDs(): number[] {
  const store = useTeamStore();
  const actualTeamsIDs: number[] = store.teamIDs;
  const newTeam: number[] = [];

  while (newTeam.length < 3) {
    const randomID: number = genRandomID()

    if (!actualTeamsIDs.includes(randomID)) {
      newTeam.push(randomID)
    }
  }

  return newTeam
}