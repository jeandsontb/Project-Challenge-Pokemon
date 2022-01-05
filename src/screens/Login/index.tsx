import React from 'react';
import { Platform } from 'react-native';

import S from './styled';
import LogoSvg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import ImageBackgroundSvg from '../../assets/poke.svg';

const Login = () => {
  return (
    <S.Container>
      <S.BoxContent>
        <S.BoxLogo>
          <LogoSvg width={206} height={76} />
        </S.BoxLogo>

        <S.BoxAvoidView 
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={20}
        >
          <S.BoxScroll showsVerticalScrollIndicator={false}> 
            <S.BoxTextInfo>
              <S.TextInfo>
                Comece a coletar {'\n'}
                pokémons!
              </S.TextInfo>
            </S.BoxTextInfo>

            <S.BoxInput>
              <Input 
                placeholder="Email"          
              />
              <Input 
                placeholder="Senha"
              />
            </S.BoxInput>

            <S.BoxButton>
              <Button title="Entrar" onPress={() => {}}/>
            </S.BoxButton>

            <S.BoxComponentImages>
              <ImageBackgroundSvg width={'100%'} /> 
            </S.BoxComponentImages>
          </S.BoxScroll>
        </S.BoxAvoidView> 
      </S.BoxContent>    
        
    </S.Container>
  );
}

export { Login };

 
           