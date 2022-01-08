import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPokemonCardDto } from '../Dtos/Pokemons';
import { getOnePokemon, listPokemon } from '../services/resources/poke';

interface PokemonProviderProps {
  children: ReactNode;
}

interface IContextData {
  pokemonCard: IPokemonCardDto[];
  loading: boolean;
  searchNewsPokemons: () => void;
  // signIn: ({email, password}: IUser) => void;
  // signOut: () => void;
} 

const PokemonContext = createContext({} as IContextData);

const PokemonProvider = ({children}: PokemonProviderProps) => {

  const [ pokemonCard, setPokemonCard ] = useState<IPokemonCardDto[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ offset, setOffset ] = useState(0)

  useEffect(() => {
    setLoading(true);
    getPokemonCard();
  }, []);

  const getPokemonCard = async () => {
    try {
      const { results } = await listPokemon(20, 0);

      const getPokemonList = results.map(async(item: { name: string; }) => {
        const data = await getOnePokemon(item.name)
         return {
           id: data.id,
           name: data.name,
           image: data.sprites.front_default,
           type: data.types[0].type.name,
           favorite: false
         };
       });

      const pokemonList = await Promise.all(getPokemonList);

      setLoading(false);
      setPokemonCard([...pokemonCard, ...pokemonList]);

    } catch(error) {
      console.log(error);
    } 
  }


  const searchNewsPokemons = () => {
    
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