import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components';

import S from './styled';

const ButtonLogout = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <TouchableWithoutFeedback>
        <S.ButtonLogout >
          <S.TextTitle>Sair</S.TextTitle>
          <MaterialIcons name="logout" size={20} color={theme.colors.text} />
        </S.ButtonLogout>
      </TouchableWithoutFeedback>
    </S.Container>
  );
}

export { ButtonLogout };