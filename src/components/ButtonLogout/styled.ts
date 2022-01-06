import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export default {
  Container: styled.View` 
    position: absolute;
    background-color: ${({theme}) => theme.colors.background_light};
    border: 1px;
    border-color: ${({theme}) => theme.colors.text};
    border-radius: 8px;
    right: 24px;
    bottom: 15px;
  `,
  ButtonLogout: styled(RectButton)`
    flex-direction: row;
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: space-between;
    padding: 0 9px;
  `,
  TextTitle: styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
  `,
}