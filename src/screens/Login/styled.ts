import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.text};
  `,
  Text: styled.Text`
    font-family: ${({theme}) => theme.fonts.semi_bold};
    font-size: 24px;
  `
}