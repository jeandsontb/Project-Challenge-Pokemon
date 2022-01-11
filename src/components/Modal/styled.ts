import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.Modal`
    flex: 1;
    background-color: azure;
  `,
  BoxContent: styled.View`
    padding: 24px;
  `,
  BoxHeader: styled.View`
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.text_moon};
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `,
  TextDetail: styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.regular};
  `,
}