export interface PokemonData {
  index: number;
  PokeNum: number;
  PokeName: string;
  PokeType1: string;
  PokeType2: string | null;
  PokeSpriteUrl: string;
  statsTotal: number;
  statsHP: number;
  statsAtk: number;
  statsDef: number;
  statsSpAtk: number;
  statsSpDef: number;
  statsSpd: number;
  isLegendary: boolean;
  isMythical: boolean;
  isMega: boolean;
}

export interface Pokemon {
  Data: [PokemonData];
  index: number;
  count: number;
} 