import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import { useTheme } from 'styled-components';

import S from './styled';
import LogoSvg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import ImageBackgroundSvg from '../../assets/poke.svg';
import { useAuth } from '../../hooks/Auth';

const Login = () => {
  const theme = useTheme();
  const { signIn } = useAuth();

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const handleSignIn = async () => {
    if(email.length > 0 && password.length > 0) {
      signIn({email, password});
      return;
    }
    Alert.alert('Opsss!', 'Todos os campos são obrigatórios');
  }

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
                value={email}
                onChangeText={e => setEmail(e)}
                keyboardType='email-address' 
                autoCorrect={false}       
              />
              <Input 
                placeholder="Senha"
                value={password}
                onChangeText={e => setPassword(e)}
                autoCorrect={false}
                secureTextEntry={true}
              />
            </S.BoxInput>

            <S.BoxButton>
              <Button 
                title="Entrar" 
                onPress={handleSignIn}
                fontSize={16}
                font={theme.fonts.medium}
              />
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

 
           