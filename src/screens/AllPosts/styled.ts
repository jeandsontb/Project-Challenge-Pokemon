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
  BoxCards: styled.View`
    flex: 1;
    margin-top: 20px;
    margin-bottom: 80px;
  `,
  ScrollCards:styled.ScrollView`
    width: 100%;
    height: 100%;
  `,
  ListCards: styled.FlatList``,
}