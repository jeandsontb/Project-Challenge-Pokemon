import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ICardProps {
  active?: boolean;
}

export default {
  Container: styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 30px;

  `,
  BoxCard: styled.View`
    width: 154px;
    height: 221px;  
    background-color: ${({theme}) => theme.colors.background_light} ;
    border-radius: 8px;
    overflow: hidden;
  `,
  BoxImagePoke: styled.View`
    position: relative;
    width: 100%;
    height: 78px;
    align-items: center;
    justify-content: center;
  `,
  ImagePoke: styled.Image`
    width: 52px;
    height: 56px;
  `,
  BoxFavorite: styled.View`
    position: absolute;
    right: 9px;
    top: 12px;
  `,
  BoxInfoCard: styled.View`
    flex: 1;
    padding: 8px;
  `,
  TextTitle: styled.Text`
    font-family: ${({theme}) => theme.fonts.semi_bold};
    font-size: ${RFValue(16)}px;
  `,
  TextId: styled.Text`
    color: ${({theme}) => theme.colors.border_search};
    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.medium};
    margin-top: -4px;
  `,
  BoxInfoSpecialty: styled.View`
    flex-direction: row;
  `,
  BoxSpecialty: styled.View<ICardProps>`
    background-color: ${({theme, active}) => 
      active ? theme.colors.button_secondary : theme.colors.button_primary};
    width: 47px;
    height: 18px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 3px;
  `,
  TextSpecialty: styled.Text<ICardProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme, active}) => 
      active ? theme.colors.background_primary : theme.colors.text};
    font-size: 7px;
  `,
  BoxButton: styled.View`
    flex: 1;
    width: 100%;
    padding: 9px 0;
  `,
}