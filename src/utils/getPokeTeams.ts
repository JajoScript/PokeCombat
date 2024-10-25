import { getPokemonById } from '@/services/'
import type { Pokemon } from "@/types";

export default async function getPokeTeams(teamIDs: number[]): Promise<Pokemon[]> {
  const querys: Promise<Pokemon>[] = []

  teamIDs.forEach((id) => {
    querys.push(getPokemonById(id));
  });

  const teamPokemons: Pokemon[] = await Promise.all(querys).catch((err) => { throw err })
  return teamPokemons;
}