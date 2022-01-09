import React, {useEffect, useState} from 'react'; 
import { ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonsGroup } from '../../components/ButtonsGroup';
import { ButtonTheme } from '../../components/ButtonTheme';
import { Cards } from '../../components/Cards';
import { useTheme } from 'styled-components';
import { Menu } from '../../components/Menu';
import { usePokemon } from '../../hooks/Pokemon';
import { IPokemonCardDto } from '../../Dtos/Pokemons';

import S from './styled';

const AllPosts = () => {

  const focused = useIsFocused();
  const theme = useTheme();
  const { searchNewsPokemons, pokemonCard, loading } = usePokemon();

  const [dataPokemon, setDataPokemon] = useState<IPokemonCardDto[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    loadPokemonData();
  }, [focused, pokemonCard]);
  
  const loadPokemonData = () => {
    setLoadingData(true);
    if(pokemonCard.length === 20) {
      setDataPokemon([...dataPokemon, ...pokemonCard]);
      setLoadingData(false);
    }    
  }

  return (
    <S.Container>
      <Menu screenActive='all' />

      <S.BoxButtonGroup>
        <ButtonsGroup />
      </S.BoxButtonGroup>

      {loadingData 
        ? 
          <S.BoxLoadingActivity>
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
          </S.BoxLoadingActivity>
        :
          <S.ListCards 
            data={dataPokemon}
            keyExtractor={(item) => {return String(uuid.v4())}}
            numColumns={2}
            onEndReached={searchNewsPokemons}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => 
              <Cards 
              data={item}
            />}
            style={{ 
              flex: 1,
              padding: 24,
              marginTop: 20,
            }}
          />
      }

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