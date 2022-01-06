import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export default {
  Container: styled.View` 
    position: absolute;
    background-color: ${({theme}) => theme.colors.button_theme};
    border: 1px;
    border-color: ${({theme}) => theme.colors.text};
    border-radius: 16px;
    left: 24px;
    bottom: 14px;
  `,
  ButtonLogout: styled(RectButton)`
    flex-direction: row;
    width: 150px;
    height: 32px;    
    align-items: center;
    justify-content: space-between;
    padding: 0 9px;
  `,
  TextTitle: styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    margin-top: 2px;
    color: ${({theme}) => theme.colors.text_moon};
  `,
}