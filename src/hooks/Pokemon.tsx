import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { IPokemonCardDto, IPokemonCardSearchDto } from '../Dtos/Pokemons';
import { getOnePokemon, listPokemon } from '../services/resources/poke';

interface PokemonProviderProps {
  children: ReactNode;
}

interface IContextData {
  pokemonCard: IPokemonCardDto[];
  loading: boolean;
  dataSearchPokemon: IPokemonCardSearchDto;
  visibleModal: boolean;
  searchNewsPokemons: () => void;
  clearListPokemons: () => void;
  searchOnePokemon: (name: string) => void;
  showModalDetail: () => void;
} 

const PokemonContext = createContext({} as IContextData);

const PokemonProvider = ({children}: PokemonProviderProps) => {

  const [ pokemonCard, setPokemonCard ] = useState<IPokemonCardDto[]>([]);
  const [ dataSearchPokemon, setDataSearchPokemon ] = useState<IPokemonCardSearchDto>({} as IPokemonCardSearchDto)
  const [ loading, setLoading ] = useState(true);
  const [ visibleModal, setVisibleModal ] = useState(false);
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
              return;
            }
        });
      } 
    } catch(err) {
      Alert.alert('Opsss!','Não foi possível realizar essa operação');
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
      Alert.alert('Opsss!', 'Pokémon não encontrado.');
      setDataSearchPokemon({} as IPokemonCardSearchDto);
      return;
    }
  }  

  const clearListPokemons = () => {
    setOffset(0);
    return;
  }

  const searchNewsPokemons = () => {
    setLoading(true);
    setOffset(offset + 20);
    return;
  }

  const showModalDetail = () => {
    return setVisibleModal(!visibleModal);
  }

  return (
    <PokemonContext.Provider value={{ 
      pokemonCard, 
      loading, 
      dataSearchPokemon,
      visibleModal,
      searchOnePokemon,
      searchNewsPokemons, 
      clearListPokemons,
      showModalDetail
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