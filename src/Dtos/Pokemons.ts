export interface IPokemonsDto {
  name: string;
  url: string;
}[];

export interface IPokemonCardDto {
  id: number;
  name: string;
  image: string;
  type: string[];
  favorite: boolean;
}[];

export interface IPokemonCardSearchDto {
  id: number;
  name: string;
  image: string;
  type: string[];
  favorite: boolean;
};

export interface IPokemonDetail {
  name: string;
  id: number;
  images: {
    photo: string;
  }[];
  height: number;
  weight: number;
  types: string[];
  stats: {
    name: string;
    base_stat: number;
  }[];
}