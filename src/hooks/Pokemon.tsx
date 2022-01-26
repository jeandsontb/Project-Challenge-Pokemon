import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IPokemonCardDetail } from '../Dtos/Pokemons';

interface PokemonProviderProps {
  children: ReactNode;
}

interface IContextFavorites {
  data: IPokemonCardDetail;
}

interface IContextData {
  pokemonFavoriteStorage: IPokemonCardDetail[];
  dataFavorites: ({data}: IContextFavorites) => void;
} 

const PokemonContext = createContext({} as IContextData);

const PokemonProvider = ({children}: PokemonProviderProps) => {

  const [ pokemonFavoriteStorage, setPokemonFavoriteStorage ] = useState<IPokemonCardDetail[]>([]);
 
  useEffect(() => {
    const populatePokemonFavorite = async () => {
      const dataPokemonFavorites = await AsyncStorage.getItem('@Pokemon:Favorites');
      if(dataPokemonFavorites) {
        const pokemonFavorites = JSON.parse(dataPokemonFavorites);
        setPokemonFavoriteStorage(pokemonFavorites);
        return;
      }
    }

    populatePokemonFavorite();
  }, []);
  
  const dataFavorites = async ({data}: IContextFavorites) => {
    const dataPokemonFavorites = await AsyncStorage.getItem('@Pokemon:Favorites');    
    try {
      if(dataPokemonFavorites) {
        const newDatapokemonsFavorites = JSON.parse(dataPokemonFavorites);
        let dataPokemonFavoritesStorage = [...newDatapokemonsFavorites];
        const filterPokemonFavorites = newDatapokemonsFavorites.find((item: IPokemonCardDetail) => 
          item.id === data.id
        );
        if(filterPokemonFavorites !== undefined) {
          dataPokemonFavoritesStorage = newDatapokemonsFavorites.filter((item: IPokemonCardDetail) => 
            item.id !== data.id
          );
          setPokemonFavoriteStorage(dataPokemonFavoritesStorage);
          let insertPokemonFavorite = JSON.stringify(dataPokemonFavoritesStorage);
          await AsyncStorage.setItem('@Pokemon:Favorites', insertPokemonFavorite);
          return;
        }
        
        if(filterPokemonFavorites === undefined) {
          let newUpdatePokemonFavorites = data;
          newUpdatePokemonFavorites.favorite = true;
          let updatePokemonFavorites = [...dataPokemonFavoritesStorage, newUpdatePokemonFavorites];
          setPokemonFavoriteStorage(updatePokemonFavorites);
          let insertPokemonFavorites = JSON.stringify(updatePokemonFavorites);
          await AsyncStorage.setItem('@Pokemon:Favorites', insertPokemonFavorites);
          return;        
        }
      }

      let primaryFavorites = data;
      primaryFavorites.favorite = true;
      setPokemonFavoriteStorage([primaryFavorites]);
      const primaryPokemonFavorites = JSON.stringify([primaryFavorites]);
      await AsyncStorage.setItem('@Pokemon:Favorites', primaryPokemonFavorites);
      return;
    }catch(err) {
      console.log('error')
    }
  }


  
  return (
    <PokemonContext.Provider value={{ 
      pokemonFavoriteStorage,
      dataFavorites
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