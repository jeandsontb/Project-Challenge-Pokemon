import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Entypo } from '@expo/vector-icons'; 
import { useIsFocused } from '@react-navigation/native';

import { Menu } from '../../components/Menu';
import S from './styled';
import { ButtonTheme } from '../../components/ButtonTheme';
import { ButtonLogout } from '../../components/ButtonLogout';
import { Cards } from '../../components/Cards';
import { getOnePokemon } from '../../services/resources/poke';
import { IPokemonCardDetail } from '../../Dtos/Pokemons';
import { usePokemon } from '../../hooks/Pokemon';

const Search = () => {

  const focused = useIsFocused();
  const theme = useTheme();
  const { pokemonFavoriteStorage } = usePokemon();
  
  const [ dataPokemon, setDataPokemon ] = useState<IPokemonCardDetail>({} as IPokemonCardDetail);
  const [ searchNamePokemon, setSearchNamePokemon ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ pokeError, setPokeError ] = useState(false);

  useEffect(() => {
    setDataPokemon({} as IPokemonCardDetail);
    setSearchNamePokemon('');
    setLoading(false);
    setPokeError(false);
  }, [focused]);

  const handleSearchPokemon = async () => {
    setLoading(true);
    setPokeError(false);
    const nameSearch = searchNamePokemon.toLowerCase();
    const pokemonData = await getOnePokemon(nameSearch);

    if(!pokemonData.error) {
      let verifyFavorite = pokemonFavoriteStorage.find((data) => data.id === pokemonData.id);
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
        favorite: verifyFavorite === undefined ? false : true,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonTypes,
        stats: stats,
      }
      setDataPokemon(data);
      setLoading(false);
      return;
    }
    setPokeError(true);
    setDataPokemon({} as IPokemonCardDetail);
    setLoading(false);
    return;
  }
  
  return (
    <S.Container>
      <Menu screenActive='search' />

      <S.BoxContent>
        <S.BoxSearch>
          <S.InputSearch 
            placeholder='Procure por pokémons'
            value={searchNamePokemon}
            onChangeText={(e) => setSearchNamePokemon(e)}
            placeholderTextColor={theme.colors.border_search}
            onSubmitEditing={handleSearchPokemon}
          />
          <Entypo name="magnifying-glass" size={24} color="black" onPress={handleSearchPokemon} />
        </S.BoxSearch> 

        <S.BoxCards>
          {loading && <ActivityIndicator size='large' color={theme.colors.text} />  }

          {!loading && Object.keys(dataPokemon).length > 0 &&
            <Cards data={dataPokemon} />
          }

          {pokeError && 
            <S.BoxMessage>
              <S.TextMessage>Pokémon não encontrado</S.TextMessage>
            </S.BoxMessage>
          }
        </S.BoxCards>
      </S.BoxContent>
      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { Search };