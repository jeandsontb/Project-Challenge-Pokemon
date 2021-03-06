import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

import S from './styled';
import LogoHeaderSvg from '../../assets/logoheader.svg';

interface IButtonStyleProps {
  indicator?: number;
  screenActive: 'all' | 'favorites' | 'search';
}

const Menu = ({indicator, screenActive}: IButtonStyleProps) => {

  const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  return (
    <S.Container>
      <S.BoxTitle>
        <LogoHeaderSvg width={72} height={30}/>
      </S.BoxTitle>

      <S.BoxButtons>
        <TouchableWithoutFeedback onPress={() => navigate('Favorites')}>
          <S.ButtonFavorite>
            <S.TextFavorite active={screenActive} >Favoritos</S.TextFavorite>
            {indicator !== undefined && indicator > 0 &&
              <S.BoxIndicator>
                <S.TextIndicator>
                  {indicator}
                </S.TextIndicator>
              </S.BoxIndicator>
            }
          </S.ButtonFavorite>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Search')}>
          <S.ButtonSearch>
            <S.TextSearch active={screenActive} >Procurar</S.TextSearch>
          </S.ButtonSearch>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('AllPosts')}>
          <S.ButtonAllPosts>
            <S.TextAllPosts active={screenActive} >Ver Todos</S.TextAllPosts>
          </S.ButtonAllPosts>
        </TouchableWithoutFeedback>
      </S.BoxButtons>
    </S.Container>
  );
}

export { Menu };