import type { Pokemon } from '../types'

export default async function getPokemonById(pokeID: number): Promise<Pokemon> {
  return new Promise(async (resolve, reject) => {
    try {
      const data: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
        .then((res) => res.json())
        .catch((err) => {
          throw err
        })

      return resolve(data);
    } catch (err: unknown) {
      console.error("[GetPokemonById] Error: ", err);
      return reject(err);
    }
  })
}