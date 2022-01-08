import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { IPokemonCardDto } from '../Dtos/Pokemons';
import { getOnePokemon, listPokemon } from '../services/resources/poke';

interface PokemonProviderProps {
  children: ReactNode;
}

interface IContextData {
  pokemonCard: IPokemonCardDto[];
  loading: boolean;
  searchNewsPokemons: () => void;
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
      setLoading(true);
      const loadPokemon = await listPokemon(limit, offset);
      if(loadPokemon) {
        let geraObj: IPokemonCardDto[] = [];
        let count = 1;
        loadPokemon.results.forEach(async (data: {name: string, url: string}) => {
          const result = await getPokemonDataDetails(data);
          if(result) {
            geraObj.push(result);
            count++;

            if(count > limit) {
              populateObjPokemon();
            }
          }          
        });

        const populateObjPokemon = async () => {
          setPokemonCard(geraObj);
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getPokemonDataDetails = async (pokemon: {name: string, url: string}) => {
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
  }  

  const searchNewsPokemons = () => {
    setLoading(true);
    if(!loading) {
      setOffset(offset + 20);      
    }
  }

  return (
    <PokemonContext.Provider value={{ pokemonCard, loading, searchNewsPokemons }} > 
      { children }
    </PokemonContext.Provider>
  );
}

const usePokemon = () => {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };