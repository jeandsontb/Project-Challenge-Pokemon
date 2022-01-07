import api from "../api";

interface IListPokemon {
  name:string;
  url: string;
}

const listPokemon = async (limit: number, offset: number) => {
  const { data } = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  if(data) {
    return data.results as IListPokemon[];
  }
}

export { listPokemon };