import api from "../api";

const listPokemon = async (limit: number, offset: number) => {
  const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
  if(data) {
    return data;
  }
}

const getOnePokemon = async (name: string) => {
  const { data } = await api.get(`/pokemon/${name}`);
  if(data) {
    return data;
  }
}

export { listPokemon, getOnePokemon };