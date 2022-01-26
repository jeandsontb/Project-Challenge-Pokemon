import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { IPokemonCardDetail } from '../../Dtos/Pokemons';

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
  BoxCardButtons: styled.View`
    width: 100%;
    height: 70px;
  `,
  ListCards: styled(FlatList as new 
    (props: FlatListProps<IPokemonCardDetail>) => FlatList<IPokemonCardDetail>).attrs({
      showsVerticalScrollIndicator: false,
  })``,
  BoxLoadingActivity: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
}