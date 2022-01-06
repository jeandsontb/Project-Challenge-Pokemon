import React, {useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

import S from './styled';
import LogoHeaderSvg from '../../assets/logoheader.svg';

interface IButtonStyleProps {
  indicator?: number;
}

const Menu = ({indicator}: IButtonStyleProps) => {

  const {navigate}: NavigationProp<ParamListBase> = useNavigation();
  const theme = useTheme();

  const [favorite, setFavorite] = useState(true);
  const [search, setSearch] = useState(false);
  const [all, setAll] = useState(false);

  const handleOptionChoiceScreen = (action: string) => {
    switch (action) {
      case 'favorite':
        setFavorite(true);
        setSearch(false);
        setAll(false);
        navigate('Favorites');
      break;
      case 'search':
        setFavorite(false);
        setSearch(true);
        setAll(false);
        navigate('Search');
      break;
      case 'all':
        setFavorite(false);
        setSearch(false);
        setAll(true);
        navigate('AllPosts');
      break;
      default:
    }
  }

  return (
    <S.Container>
      <S.BoxTitle>
        <LogoHeaderSvg width={72} height={30}/>
      </S.BoxTitle>

      <S.BoxButtons>
        <TouchableWithoutFeedback onPress={() => handleOptionChoiceScreen('favorite')}>
          <S.ButtonFavorite>
            <S.TextFavorite active={favorite} >Favoritos</S.TextFavorite>
            {indicator !== undefined && indicator > 0 &&
              <S.BoxIndicator>
                <S.TextIndicator>
                  {indicator}
                </S.TextIndicator>
              </S.BoxIndicator>
            }
          </S.ButtonFavorite>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleOptionChoiceScreen('search')}>
          <S.ButtonSearch>
            <S.TextSearch active={search} >Procurar</S.TextSearch>
          </S.ButtonSearch>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleOptionChoiceScreen('all')}>
          <S.ButtonAllPosts>
            <S.TextAllPosts active={all} >Ver Todos</S.TextAllPosts>
          </S.ButtonAllPosts>
        </TouchableWithoutFeedback>
      </S.BoxButtons>
    </S.Container>
  );
}

export { Menu };