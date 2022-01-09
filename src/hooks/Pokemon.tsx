import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { IPokemonCardDto } from '../Dtos/Pokemons';
import { getOnePokemon, listPokemon } from '../services/resources/poke';

interface PokemonProviderProps {
  children: ReactNode;
}

interface IContextData {
  pokemonCard: IPokemonCardDto[];
  loading: boolean;
  searchNewsPokemons: () => void;
  clearListPokemons: () => void;
} 

const PokemonContext = createContext({} as IContextData);

const PokemonProvider = ({children}: PokemonProviderProps) => {

  const [ pokemonCard, setPokemonCard ] = useState<IPokemonCardDto[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ offset, setOffset ] = useState(0);
  const [ limit, setLimit ] = useState(20);

  useEffect(() => {
    getPokemonCard();
  }, [offset]);
  
  const getPokemonCard = async () => {
    try {
      const insertPokemonList: IPokemonCardDto[] = [];
      const loadPokemon = await listPokemon(limit, offset);
      if(loadPokemon) {
        loadPokemon.results.forEach(async (data: {name: string, url: string}) => {
          const result = await getPokemonDataDetails(data);
          insertPokemonList.push(result as IPokemonCardDto);

            if(insertPokemonList.length === limit) {
              setPokemonCard(insertPokemonList);
              setLoading(false);
            }
        });
      } 
    } catch(err) {
      Alert.alert('Opsss!','Não foi possível realizar essa operação');
    }  
  }

  const getPokemonDataDetails = async (pokemon: {name: string, url: string}) => {
    try {
      const pokemonData = await getOnePokemon(pokemon.name);
      if( pokemonData ) {  
        let pokemonTypes: string[] = [];
        pokemonData.types.forEach((types: { type: { name: string; }; }) => {
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
      Alert.alert('Opsss!', 'Não foi possível realizar essa operação.');
    }
  }  

  const clearListPokemons = () => {
    setOffset(0);
  }

  const searchNewsPokemons = () => {
    setLoading(true);
    setOffset(offset + 20);
  }

  return (
    <PokemonContext.Provider value={{ pokemonCard, loading, searchNewsPokemons, clearListPokemons }} > 
      { children }
    </PokemonContext.Provider>
  );
}

const usePokemon = () => {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };