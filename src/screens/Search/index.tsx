import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Entypo } from '@expo/vector-icons'; 
import { useIsFocused } from '@react-navigation/native';

import { Menu } from '../../components/Menu';
import S from './styled';
import { ButtonTheme } from '../../components/ButtonTheme';
import { ButtonLogout } from '../../components/ButtonLogout';
import { usePokemon } from '../../hooks/Pokemon';
import { Cards } from '../../components/Cards';

const Search = () => {

  const focused = useIsFocused();
  const theme = useTheme();
  const { 
    clearListPokemons, 
    searchOnePokemon, 
    dataSearchPokemon 
  } = usePokemon();
  

  const [ searchNamePokemon, setSearchNamePokemon ] = useState('');
  const [ pokemon, setPokemon ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    clearListPokemons();
    setPokemon({});    
  }, [focused]);

  useEffect(() => {
    setPokemon(dataSearchPokemon);
    setSearchNamePokemon('');
    setLoading(false);
  }, [dataSearchPokemon]);

  const handleSubmitSearch = () => {
    setLoading(true);
    setPokemon({});
    searchOnePokemon(searchNamePokemon);
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
            onSubmitEditing={handleSubmitSearch}
          />
          <Entypo name="magnifying-glass" size={24} color="black" onPress={handleSubmitSearch} />
        </S.BoxSearch> 

        <S.BoxCards>
          {loading && <ActivityIndicator size='large' color={theme.colors.text} />  }

          {!loading && Object.keys(pokemon).length > 0 &&
            <Cards data={pokemon} />
          }
        </S.BoxCards>
      </S.BoxContent>
      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { Search };