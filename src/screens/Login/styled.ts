import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};  
  `,
  BoxContent: styled.View`
    flex: 1;
  `,
  BoxAvoidView: styled.KeyboardAvoidingView`
    flex: 1;
  `,
  BoxScroll: styled.ScrollView`
    height: 100%;
    width: 100%;
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
    height: 120px;
    padding: 0 24px;
  `,  
  TextInfo: styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(24)}px;
  `,
  BoxInput: styled.View`
    width: 100%;
    height: 200px;
    padding: 0 24px;
  `,
  BoxButton: styled.View`
    width: 100%;
    margin-top: 9px;
    height: 80px;
    padding: 0 24px;
  `, 
  BoxComponentImages: styled.View`
    margin-top: ${RFPercentage(8.5)}px;
  `,   
}