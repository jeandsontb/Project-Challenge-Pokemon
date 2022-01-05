import React from 'react';

import S from './styled';
import LogoSvg from '../../assets/logo.svg';

const Login = () => {
  return (
    <S.Container>
      <S.BoxLogo>
        <LogoSvg width={206} height={76} />
      </S.BoxLogo>

      <S.BoxTextInfo>
        <S.TextInfo>
          Comece a coletar {'\n'}
          pokémons!
        </S.TextInfo>
      </S.BoxTextInfo>
    </S.Container>
  );
}

export { Login };