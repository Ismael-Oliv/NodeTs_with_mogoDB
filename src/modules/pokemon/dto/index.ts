export interface IPokemon {
  pokedex_index: number;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  generation: number;
  image: string;
}

export interface IType {
  type: string;
}
