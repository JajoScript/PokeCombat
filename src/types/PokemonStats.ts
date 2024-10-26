interface PokemonStat {
  base_stat: number; // 1: HP, 2: Attack, 4: Special-attack
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export type { PokemonStat }