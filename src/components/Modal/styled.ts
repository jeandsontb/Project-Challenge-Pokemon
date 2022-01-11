import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IBoxButtonPokemonProps {
  backgroundColor: boolean;
}

interface IBarProgressPokemonProps {
  value: number;
}

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
  BoxPokemon: styled.View`
    width: 100%;
    height: 160px;
    padding: 18px 0;
  `,
  TextName: styled.Text`
    font-family: ${({theme}) => theme.fonts.semi_bold};
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.text};
  `,
  BoxImagesPokemon: styled.View`
    width: 100%;
    height: 70px;    
  `,
  ScrollPokemon: styled.ScrollView`
    
  `,
  BoxImage: styled.View`
    width: 79px;
    height: 70px;
    background-color: ${({theme}) => theme.colors.background_light};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 5px;
  `,
  ImagePokemon: styled.Image`
    width: 45px;
    height: 48px;
  `,
  BoxDetailPokemon: styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
  `,
  TextHeight: styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text};
    margin-right: 18px;
  `,
  TextWeight: styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text};
  `,
  BoxTypeButtonPokemon: styled.View`
    width: 100%;
    flex-direction: row;
    padding: 23px 0;
  `,
  BoxTypePokemon: styled.View<IBoxButtonPokemonProps>`
    background-color: ${({theme, backgroundColor}) => 
      backgroundColor ? theme.colors.button_primary : theme.colors.button_secondary};
      margin-right: 7px;
      width: 90px;
      height: 30px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
  `,
  TextTitleType: styled.Text<IBoxButtonPokemonProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    color: ${({theme, backgroundColor}) => 
      backgroundColor ? theme.colors.text : theme.colors.background_primary};
  `,
  TextStatiscics: styled.Text`
    font-family: ${({theme}) => theme.fonts.semi_bold};
    color: ${({theme}) => theme.colors.text_light};
    font-size: 13px;
  `,
  BoxStatistics: styled.View`
    width: 100%;
    height: ${RFPercentage(54)}px;
    justify-content: space-between;
  `,
  BoxStatisticsPerfil: styled.View`
    width: 100%;
    padding: 10px 0;
  `,
  BoxProgressBar: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  TextInfo: styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
    width: 50px;
  `,
  BoxContainerProgressBar: styled.View`
    width: 240px;
  `,
  BoxBarProgressInitial: styled.View`
    width: 100%;
    height: 9px;
    background-color: ${({theme}) => theme.colors.text_moon};
    border-radius: 5px;
  `,
  BoxBarProgressFinal: styled.View<IBarProgressPokemonProps>`
    width: ${({theme, value}) => value ? value : 1}%;
    height: 9px;
    background-color: ${({theme}) => theme.colors.button_primary};
    border-radius: 5px;
  `,
  TextValue: styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(12)}px;
  `,
}