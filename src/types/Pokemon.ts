import type { PokemonAbility } from './PokemonAbility'
import type { PokemonSprites } from './PokemonSprites'
import type { PokemonStat } from './PokemonStats';
import type { PokemonType } from './PokemonTypes';

interface Pokemon {
  // El identificador de este recurso.
  id: number;

  // El nombre de este recurso.
  name: string;

  // La experiencia base ganada por derrotar a este Pokémon.
  base_experience: number;

  // La altura de este Pokémon en decímetros.
  height: number;

  // El peso de este Pokémon en hectogramos.
  weight: number;

  // Establecido para exactamente un Pokémon usado como el predeterminado para cada especie.
  is_default: boolean;

  // Orden para clasificar. Casi orden nacional, excepto que las familias están agrupadas.
  order: number;

  // A list of abilities this Pokémon could potentially have.
  abilities: PokemonAbility[];

  // A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites
  sprites: PokemonSprites;

  stats: PokemonStat[];

  types: PokemonType[];
}


export type {
  Pokemon
}