import type { OtherSprites } from './OtherSprites'
interface PokemonSprites {
  // The default depiction of this Pokémon from the front in battle.
  front_default: string;

  // The default depiction of this Pokémon from the back in battle.
  back_default: string | null;

  // The shiny depiction of this Pokémon from the front in battle.
  front_shiny: string;

  // The shiny depiction of this Pokémon from the back in battle.
  back_shiny: string | null;

  // The female depiction of this Pokémon from the front in battle.
  front_female: string;

  // The female depiction of this Pokémon from the back in battle.
  back_female: string | null;

  // The shiny female depiction of this Pokémon from the front in battle.
  front_shiny_female: string;

  // The shiny female depiction of this Pokémon from the back in battle.
  back_shiny_female: string;

  other: OtherSprites;
}

export type {
  PokemonSprites
}