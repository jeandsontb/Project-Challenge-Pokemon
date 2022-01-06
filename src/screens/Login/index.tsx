import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useTheme } from 'styled-components';
import JWT from 'expo-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  useFocusEffect, 
  useNavigation, 
  NavigationProp, 
  ParamListBase 
} from '@react-navigation/native';


import S from './styled';
import LogoSvg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import ImageBackgroundSvg from '../../assets/poke.svg';

interface IDataCredential {
  email: string;
  password: string;
}

const Login = () => {
  const theme = useTheme();
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ user, setUser ] = useState<string>('');

  useFocusEffect(() => {
    const getAccessUser = async () => {
      const userAccount = await AsyncStorage.getItem('@userAccount:user');

      if(userAccount) {
        setUser(userAccount);
      }
    }
    getAccessUser();
  }); 

  const handleSignIn = async () => {
    const key = process.env.KEY_PASS_SIGNIN as string;

    if(email.length > 0 && password.length > 0) {
      if(!user) {
        const token = JWT.encode({email, password}, key);

        if(token) {
          await AsyncStorage.setItem('@usertoken:user', token);
          await AsyncStorage.setItem('@userAccount:user', token);
          navigate('AllPosts');
          return;
        }
      }

      const userCredential = JWT.decode(user, key) as IDataCredential;
      if(email === userCredential.email && password === userCredential.password) {        
        const token = JWT.encode({email, password}, key);
        await AsyncStorage.setItem('@usertoken:user', token);
        navigate('AllPosts');
        return;
      }
      Alert.alert('Opsss!', 'Email e ou Senha inválidos!');
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

 
           