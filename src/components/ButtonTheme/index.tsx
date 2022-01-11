import React,{ useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components';

import { useThemeFolks } from '../../hooks/Theme';

import S from './styled';

const ButtonTheme = () => {

  const theme = useTheme();

  const { night } = useThemeFolks();

  const handleChangeTheme = () => {
    night(true);
  }

  return (
    <S.Container>
      <TouchableWithoutFeedback onPress={handleChangeTheme} >
        <S.ButtonLogout >
          <Entypo name="moon" size={20} color={theme.colors.text_moon} />
          <S.TextTitle>Tema escuro</S.TextTitle>
        </S.ButtonLogout>
      </TouchableWithoutFeedback>
    </S.Container>
  );
}

export { ButtonTheme };