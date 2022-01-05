import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled.TextInput`
    width: 100%;
    padding: 18px 26px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.text_light};
    font-family: ${({theme}) => theme.fonts.regular};
    background-color: ${({theme}) => theme.colors.background_primary};
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: ${RFValue(12)}px;
  `,
}