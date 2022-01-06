import React from 'react';
import { useTheme } from 'styled-components';

import { Menu } from '../../components/Menu';

import S from './styled';

const AllPosts = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <Menu />

      <S.BoxButtonGroup>
        
      </S.BoxButtonGroup>
    </S.Container>
  );
}

export { AllPosts };