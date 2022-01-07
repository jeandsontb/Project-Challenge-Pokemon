import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Menu } from '../../components/Menu';
import S from './styled';
import AstronautSvg from '../../assets/Astronaut.svg';
import { Button } from '../../components/Button';
import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonTheme } from '../../components/ButtonTheme';

const Favorites = () => {

  const theme = useTheme();
  const [ indicator, setIndicator ] = useState<number>(1);

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={theme.colors.status_bar}
      />
      
      <Menu indicator={indicator} screenActive='favorites' />

      <S.BoxWarnFavorites>
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

        <ButtonTheme />

        <ButtonLogout />

      </S.BoxWarnFavorites>
    </S.Container>
  );
}

export { Favorites };