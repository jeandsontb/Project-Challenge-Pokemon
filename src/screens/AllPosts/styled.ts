import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_light};
  `,
  BoxButtonGroup: styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
}