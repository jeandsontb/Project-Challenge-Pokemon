import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface IProps {
  active: 'all' | 'favorites' | 'search';
}

export default {
  Container: styled.View`
    background-color: ${({theme}) => theme.colors.background_primary};
  `,
  BoxTitle: styled.View`
    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.colors.button_primary};
    justify-content: center;
    align-items: center;
  `,
  BoxButtons: styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.background_light};
  `,
  ButtonFavorite: styled(RectButton)`
    padding: 15px;
    flex-direction: row;
    align-items: center;
  `,
  TextFavorite: styled.Text<IProps>`
    font-family: ${({theme, active}) => 
      active === 'favorites' ? theme.fonts.semi_bold : theme.fonts.regular};
    border-bottom-width: ${({active}) => active === 'favorites' ? 2 : 0}px;
    border-bottom-color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
  `,
  BoxIndicator: styled.View`
    background-color: ${({theme}) => theme.colors.indicator};
    width: 26px;
    height: 26px;
    margin-left: 9px;
    border-radius: 13px;
    justify-content: center;
    align-items: center;
  `,
  TextIndicator: styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.background_primary};
    font-size: ${RFValue(10)}px;
  `,
  ButtonSearch: styled(RectButton)`
    padding: 15px;
  `,
  TextSearch: styled.Text<IProps>`
    font-family: ${({theme, active}) => 
      active === 'search' ? theme.fonts.semi_bold : theme.fonts.regular};
    border-bottom-width: ${({active}) => active === 'search' ? 2 : 0}px;
    border-bottom-color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
  `,
  ButtonAllPosts: styled(RectButton)`
    padding: 15px;
  `,
  TextAllPosts: styled.Text<IProps>`
    font-family: ${({theme, active}) => 
      active === 'all' ? theme.fonts.semi_bold : theme.fonts.regular};
    border-bottom-width: ${({active}) => active === 'all' ? 2 : 0}px;
    border-bottom-color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
  `,
}