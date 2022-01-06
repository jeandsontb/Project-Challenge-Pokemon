import React from 'react';
import { useTheme } from 'styled-components';
import { ButtonsGroup } from '../../components/ButtonsGroup';

import { Menu } from '../../components/Menu';

import S from './styled';

const AllPosts = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <Menu screenActive={true} />

      <S.BoxButtonGroup>
        <ButtonsGroup />
      </S.BoxButtonGroup>
    </S.Container>
  );
}

export { AllPosts };