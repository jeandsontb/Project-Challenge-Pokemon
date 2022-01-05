import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};
    padding: 0 24px;
  `,
  BoxLogo: styled.View`
    width: 100%;
    height: 76px;
    align-items: center;
    margin-top: 56px;
    margin-bottom: 64px;
  `,
  BoxTextInfo: styled.View`
    width: 100%;
    margin-bottom: 40px;
  `,  
  TextInfo: styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(24)}px;
  `,
  
}