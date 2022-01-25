import api from "../api";

const listPokemon = async (limit: number, offset: number) => {
  const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
  if(data) {
    return data;
  }
}

const getOnePokemon = async (name: string) => {  
  try {
    const { data } = await api.get(`/pokemon/${name}`);
    return data;
  } catch(error) {
    return {error: 'Pokemón não encontrado!'};
  }
}

const getCardPokemon = async (id: number) => {
  const { data } = await api.get(`/pokemon/${id}`);
  if(data) {
    return data;
  }
}

const getDetailPokemon = async (name: string) => {
  const { data } = await api.get(`/pokemon/${name}`);
  if(data) {
    return data;
  }
}

export { 
  listPokemon, 
  getOnePokemon, 
  getDetailPokemon, 
  getCardPokemon
};