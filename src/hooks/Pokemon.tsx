import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { IPokemonCardDetail, IPokemonCardDto, IPokemonCardSearchDto } from '../Dtos/Pokemons';
import { getCardPokemon, getOnePokemon, listPokemon } from '../services/resources/poke';

interface PokemonProviderProps {
  children: ReactNode;
}

interface IContextData {
  pokemonCard: IPokemonCardDetail[];
  loading: boolean;
  dataSearchPokemon: IPokemonCardSearchDto;
  searchNewsPokemons: () => void;
  clearListPokemons: () => void;
  searchOnePokemon: (name: string) => void;
} 

const PokemonContext = createContext({} as IContextData);

const PokemonProvider = ({children}: PokemonProviderProps) => {

  const [ pokemonCard, setPokemonCard ] = useState<IPokemonCardDetail[]>([]);
  const [ dataSearchPokemon, setDataSearchPokemon ] = useState<IPokemonCardSearchDto>({} as IPokemonCardSearchDto);
  const [ loading, setLoading ] = useState(true);
  const [ offset, setOffset ] = useState(0);
  const [ limit, setLimit ] = useState(20);

  useEffect(() => {
    getPokemonCard();
  }, [offset]);
  
  const getPokemonCard = async () => {
    try {
      const insertPokemonList: IPokemonCardDetail[] = [];
      const loadPokemon = await listPokemon(limit, offset);
        for(let i=0; i<loadPokemon.results.length; i++){
          let id = loadPokemon.results[i].url.split('/')[6];
          let pokemonData = await getCardPokemon(id);
          let statsPoke = pokemonData.stats.map((stat: { stat: { name: string; }; base_stat: number; }) => {
            let obj = {
              name: stat.stat.name,
              base_stat: stat.base_stat
            };
            return obj;
          });
          let typesPokemonCards = pokemonData.types.map((types: { type: { name: string; }; }) => {
            return types.type.name;
          });
          const stats: {name: string, base_stat: number}[] = await Promise.all(statsPoke);
          const pokemonTypes: string[] = await Promise.all(typesPokemonCards);
          let data = {
            id: pokemonData.id,
            name: pokemonData.name,        
            images: [
              {photo: pokemonData.sprites.front_default },
              {photo: pokemonData.sprites.back_shiny },
              {photo: pokemonData.sprites.front_shiny }
            ],
            height: pokemonData.height,
            weight: pokemonData.weight,
            types: pokemonTypes,
            stats: stats,
          }
          insertPokemonList.push(data);
        }      
        if(insertPokemonList.length === 20) {
          setLoading(false);
          setPokemonCard(insertPokemonList);
          return;
        }
    } catch(err) {
      Alert.alert('Opsss!','Não foi possível realizar essa operação');
      return;
    }  
  }

  const getPokemonDataDetails = async (pokemon: {name: string, url: string}) => {
    try {
      const pokemonData = await getOnePokemon(pokemon.name);
      if( pokemonData ) {  
        let pokemonTypes: string[] = [];
        pokemonData.types.map((types: { type: { name: string; }; }) => {
          pokemonTypes.push(types.type.name);
        });
        const objPokemon: IPokemonCardDto = {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
          favorite: false,
          type: pokemonTypes
        }        
        return objPokemon;
      }
    } catch(err) {
      Alert.alert('Opsss!', 'Pokémon não encontrado.');
      setDataSearchPokemon({} as IPokemonCardSearchDto);
      return;
    }
  } 
  
  const searchOnePokemon = async (name: string) => {
    const objSearch = {name: name.toLowerCase(), url: ''}
    const dataResponseSearchPokemon = await getPokemonDataDetails(objSearch);

    if(dataResponseSearchPokemon) {
      setDataSearchPokemon(dataResponseSearchPokemon);
      return
    }
  }

  const clearListPokemons = () => {
    setDataSearchPokemon({} as IPokemonCardSearchDto);
    setOffset(0);
    return;
  }

  const searchNewsPokemons = () => {
    setLoading(true);
    setOffset(offset + 20);
    return;
  }

  return (
    <PokemonContext.Provider value={{ 
      pokemonCard, 
      loading, 
      dataSearchPokemon,
      searchOnePokemon,
      searchNewsPokemons, 
      clearListPokemons,
    }} > 
      { children }
    </PokemonContext.Provider>
  );
}

const usePokemon = () => {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };