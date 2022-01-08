import React from 'react'; 
import { ActivityIndicator } from 'react-native';

import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonsGroup } from '../../components/ButtonsGroup';
import { ButtonTheme } from '../../components/ButtonTheme';
import { Cards } from '../../components/Cards';
import { useTheme } from 'styled-components';
import { Menu } from '../../components/Menu';
import { usePokemon } from '../../hooks/Pokemon';

import S from './styled';

const AllPosts = () => {

  const theme = useTheme();
  const { searchNewsPokemons, pokemonCard, loading } = usePokemon();

  return (
    <S.Container>
      <Menu screenActive='all' />

      <S.BoxButtonGroup>
        <ButtonsGroup />
      </S.BoxButtonGroup>
      
      <S.ListCards 
        data={pokemonCard}
        keyExtractor={item => item.name}
        renderItem={({item}) => 
          <Cards 
          data={item} 
        />}
        numColumns={2}
        onEndReached={searchNewsPokemons}
        style={{ 
          flex: 1,
          padding: 24,
          marginTop: 20,
        }}
      />

      {loading &&
        <ActivityIndicator 
          size='large'
          color={theme.colors.text}
          style={{
            width: '100%', 
            height: 20, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: 15
          }}
        />
      }

      <S.BoxCardButtons />

      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { AllPosts };