import React from 'react';
import { useTheme } from 'styled-components';
import { Entypo } from '@expo/vector-icons'; 

import { Menu } from '../../components/Menu';
import S from './styled';
import { ButtonTheme } from '../../components/ButtonTheme';
import { ButtonLogout } from '../../components/ButtonLogout';

const Search = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <Menu screenActive={false} />

      <S.BoxContent>
        <S.BoxSearch>
          <S.InputSearch 
            placeholder='Procure por pokémons'
            placeholderTextColor={theme.colors.border_search}
          />
          <Entypo name="magnifying-glass" size={24} color="black" />
        </S.BoxSearch> 

        <S.BoxCards>
          <S.ScrollCards>
            
            

          </S.ScrollCards>
        </S.BoxCards>
      </S.BoxContent>

      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { Search };