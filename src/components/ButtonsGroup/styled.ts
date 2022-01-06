import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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
    width: 140px;
    border: ${({active}) => active ? 0 : 1}px;
    border-color: ${({theme}) => theme.colors.text};
    border-radius: 8px;
    margin-top: 16px;
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
  TextButtonChoice: styled.Text``,
}