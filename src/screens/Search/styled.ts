import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_light};
  `,
  BoxContent: styled.View`
    flex: 1;
    padding: 24px;
  `,
  BoxSearch: styled.View`
    flex-direction: row;
    width: 100%;
    border: 1px;
    border-color: ${({theme}) => theme.colors.border_search};
    border-radius: 8px;
    margin-top: 16px;
    align-items: center;
    padding: 16px 9px;
  `, 
  InputSearch: styled.TextInput`
    flex: 1;
    font-size: ${RFValue(14)}px;
    margin-top: 3px;
    font-family: ${({theme}) => theme.fonts.medium};
  `, 
  BoxCards: styled.View`
    flex: 1;
  `,
  ScrollCards: styled.ScrollView`
    width: 100%;
    height: 100%;
  `,
}