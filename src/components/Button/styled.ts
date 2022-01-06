import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface IComponentProps {
  border?: number;
  borderColor?: string;
}

interface IButtonRecProps {
  background?: string;
}

interface IFontProps {
  color?: string;
  font?: string;
  fontSize?: number;
}

export default {
  BoxDetailsButton: styled.View<IComponentProps>`
    border: ${({border}) => border ? border : 0}px;
    border-color: ${({theme, borderColor}) => 
      borderColor ? borderColor : theme.colors.text};
    border-radius: 8px;
    padding-right: 0.5px;
  `,
  Button: styled(RectButton)<IButtonRecProps>`
    background-color: ${({theme, background}) => 
      background ? background : theme.colors.button_primary};
    width: 100%;
    border-radius: 8px;
    align-items: center;
    padding: 15px 0;
  `,
  TextTitleButton: styled.Text<IFontProps>`
    font-family: ${({theme, font}) => font ? font : theme.fonts.medium};
    color: ${({theme, color}) => color ? color : theme.colors.text};
    font-size:  ${({fontSize}) => fontSize ? RFValue(fontSize) : 12}px;
  `,
}