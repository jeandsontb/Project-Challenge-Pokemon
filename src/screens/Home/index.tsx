import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Menu } from '../../components/Menu';
import S from './styled';

const Home = () => {

  const theme = useTheme();
  const indicator = 2;

  return (
    <S.Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={theme.colors.status_bar}
      />
      
      <Menu indicator={indicator} />
    </S.Container>
  );
}

export { Home };