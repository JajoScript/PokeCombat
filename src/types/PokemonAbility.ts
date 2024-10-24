import type { NamedAPIResource } from './NamedAPIResource'

interface PokemonAbility {
  // Whether or not this is a hidden ability.
  is_hidden: boolean;

  // The slot this ability occupies in this Pokémon species.
  slot: number;

  // The ability the Pokémon may have.
  ability: NamedAPIResource;
}


export type {
  PokemonAbility
}