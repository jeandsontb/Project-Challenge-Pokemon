import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components';

import S from './styled';

const ButtonTheme = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <TouchableWithoutFeedback>
        <S.ButtonLogout >
          <Entypo name="moon" size={20} color={theme.colors.text_moon} />
          <S.TextTitle>Tema escuro</S.TextTitle>
        </S.ButtonLogout>
      </TouchableWithoutFeedback>
    </S.Container>
  );
}

export { ButtonTheme };