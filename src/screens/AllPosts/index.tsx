import React from 'react';
import { useTheme } from 'styled-components';
import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonsGroup } from '../../components/ButtonsGroup';
import { ButtonTheme } from '../../components/ButtonTheme';
import { Cards } from '../../components/Cards';

import { Menu } from '../../components/Menu';

import S from './styled';

const AllPosts = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <Menu screenActive='all' />

      <S.BoxButtonGroup>
        <ButtonsGroup />
      </S.BoxButtonGroup>

      <S.BoxCards>
        <S.ScrollCards>
          <Cards />
        </S.ScrollCards>
      </S.BoxCards>

      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { AllPosts };