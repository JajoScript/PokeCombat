import generatePokemonIDTeams from './generatePokemonIDTeams'
import { getPokemonById } from '../services/'
import type { Pokemon } from '../types'

export default async function generatePokeTeams() {
  console.info("Generando equipos de pokemons...");
  const team_IDs: number[] = generatePokemonIDTeams();

  // * Obtener los pokemons por ID.
  const querys: Promise<Pokemon>[] = [];
  team_IDs.forEach((pokeID) => {
    querys.push(getPokemonById(pokeID));
  });

  const pokemons: Pokemon[] = await Promise.all(querys).then((pokemons: Pokemon[]) => {
    return pokemons;
  });

  console.info("Equipos de pokemons generados:", pokemons);
  return pokemons;
}
