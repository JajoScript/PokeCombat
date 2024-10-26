interface PokeStats {
  teamId: string;
  pokemonId: number;

  // Stats.
  hp: number;
  hpMax: number;
  attack: number;
  specialAttack: number;
}

export type { PokeStats }