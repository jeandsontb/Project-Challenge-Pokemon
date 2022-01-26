import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { Menu } from '../../components/Menu';
import S from './styled';
import AstronautSvg from '../../assets/Astronaut.svg';
import { Button } from '../../components/Button';
import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonTheme } from '../../components/ButtonTheme';
import { usePokemon } from '../../hooks/Pokemon';
import { IPokemonCardDetail } from '../../Dtos/Pokemons';
import { Cards } from '../../components/Cards';

const Favorites = () => {

  const theme = useTheme();
  const focused = useIsFocused();
  const { pokemonFavoriteStorage } = usePokemon();
  const [ indicator, setIndicator ] = useState<number>(0);

  const [ pokemonsFavorites, setPokemonsFavorites ] = useState<IPokemonCardDetail[]>([] as IPokemonCardDetail[]);

  useEffect(() => {
    const populatePokemonFavorite = () => {
      if(pokemonFavoriteStorage) {
        setPokemonsFavorites(pokemonFavoriteStorage);
        setIndicator(pokemonFavoriteStorage.length);
        return;
      }
      return;
    }
    populatePokemonFavorite();
  }, [focused, pokemonFavoriteStorage]);

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={theme.colors.status_bar}
      />
      
      <Menu indicator={indicator} screenActive='favorites' />

      <S.BoxWarnFavorites>
        {indicator === 0 &&
          <>
            <S.BoxImage>
              <AstronautSvg />
            </S.BoxImage>

            <S.BoxTextWarnFavorites>
              <S.TextTitleWarn>
                Está meio vazio por aqui
              </S.TextTitleWarn>
              <S.TextInfoWarn>
                Procure por pokémons para adicioná-los {'\n'}
                aos seus favoritos.
              </S.TextInfoWarn>
            </S.BoxTextWarnFavorites>

            <S.BoxButtonAll>
              <Button 
                title="Procurar pokémons" 
                border={1}
                borderColor={theme.colors.text}
                background={theme.colors.background_light}
                font={theme.fonts.medium}
                fontSize={14}
                onPress={() => {}} 
              />
            </S.BoxButtonAll>
          </>
        }

        {indicator > 0 &&
          <>
            <S.BoxFavoritesPokemons>              
                <S.TextTitleFavorites>
                  Olá, você tem {indicator < 10 ? `0${indicator}` : indicator} pokémon salvo!
                </S.TextTitleFavorites>
                <S.ScrollFavoritesPokemons  
                  data={pokemonsFavorites}
                  keyExtractor={(item) => uuid.v4().toString()}
                  numColumns={2}
                  renderItem={({item}) => <Cards data={item} />}
                  showsVerticalScrollIndicator={false}
                  style={{ 
                    flex: 1,
                    padding: 24,
                    marginTop: 20,
                  }}
                />
            </S.BoxFavoritesPokemons>
          </>
        }

        <ButtonTheme />

        <ButtonLogout />

      </S.BoxWarnFavorites>
    </S.Container>
  );
}

export { Favorites };