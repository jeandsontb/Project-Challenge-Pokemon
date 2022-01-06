import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components';

import S from './styled';
import { useAuth } from '../../hooks/Auth';

const ButtonLogout = () => {

  const theme = useTheme();
  const { signOut } = useAuth();

  return (
    <S.Container>
      <TouchableWithoutFeedback onPress={signOut}>
        <S.ButtonLogout >
          <S.TextTitle>Sair</S.TextTitle>
          <MaterialIcons name="logout" size={20} color={theme.colors.text} />
        </S.ButtonLogout>
      </TouchableWithoutFeedback>
    </S.Container>
  );
}

export { ButtonLogout };