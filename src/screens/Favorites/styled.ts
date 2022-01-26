import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_light};
  `,
  BoxWarnFavorites: styled.View`
    flex: 1;
  `,
  BoxImage: styled.View`
    width: 100%;
    height: ${RFPercentage(35)}px;
    justify-content: center;
    align-items: center;
  `,
  BoxTextWarnFavorites: styled.View`
    width: 100%;
    padding: 20px;    
  `,
  TextTitleWarn: styled.Text`
    font-size: ${RFValue(22)}px;
    font-family: ${({theme}) => theme.fonts.semi_bold};
    color: ${({theme}) => theme.colors.text};
  `,
  TextInfoWarn: styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_light};
    font-size: ${RFValue(12)}px;
    text-align: center;
    margin-top: 8px;
  `,
  BoxButtonAll: styled.View`
    padding: 32px 65px 0px 65px;
  `,
  BoxFavoritesPokemons: styled.View`
    padding: 40px 0px 60px 0px; 
    flex: 1;
  `,
  ScrollFavoritesPokemons: styled.FlatList``,
  TextTitleFavorites: styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.regular};
    text-align: center;
  `,
}