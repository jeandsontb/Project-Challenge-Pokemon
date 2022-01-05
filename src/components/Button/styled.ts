import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  Button: styled(RectButton)`
    background-color: ${({theme}) => theme.colors.button_primary};
    width: 100%;
    border-radius: 8px;
    align-items: center;
    padding: 15px 0;
  `,
  TextTitleButton: styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(16)}px;
  `,
}