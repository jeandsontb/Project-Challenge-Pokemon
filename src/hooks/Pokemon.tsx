import { createContext, ReactNode, useContext, useState } from 'react';

import { IPokemonCardSearchDto } from '../Dtos/Pokemons';

interface PokemonProviderProps {
  children: ReactNode;
}

interface IContextData {
  dataSearchPokemon: IPokemonCardSearchDto;
} 

const PokemonContext = createContext({} as IContextData);

const PokemonProvider = ({children}: PokemonProviderProps) => {

  const [ dataSearchPokemon, setDataSearchPokemon ] = useState<IPokemonCardSearchDto>({} as IPokemonCardSearchDto);
  
  
  return (
    <PokemonContext.Provider value={{ 
      dataSearchPokemon,
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