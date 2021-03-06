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

export interface IPokemonCardDetail {
  name: string;
  id: number;
  images: {
    photo: string;
  }[];
  favorite: boolean;
  height: number;
  weight: number;
  types: string[];
  stats: {
    name: string;
    base_stat: number;
  }[];
}[];