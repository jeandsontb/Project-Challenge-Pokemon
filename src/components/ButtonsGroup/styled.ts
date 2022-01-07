import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface IButtonProps {
  active: boolean;
}

export default {
  Container: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  `,
  BoxButton: styled.View<IButtonProps>`
    width: ${RFPercentage(18)}px;
    border: 1px;
    border-color: ${({theme, active}) => 
      active ? theme.colors.button_primary : theme.colors.text};
    border-radius: 8px;
    margin-top: 20px;
    overflow: hidden;
  `,
  ButtonChoiceListPokem: styled(RectButton)<IButtonProps>`
    padding: 14px 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme, active}) => 
      active ? theme.colors.button_primary : theme.colors.background_light};
  `,
  TextButtonChoice: styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
  `,
}