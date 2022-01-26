import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { IPokemonCardDetail } from '../../Dtos/Pokemons';
import { usePokemon } from '../../hooks/Pokemon';

const Cards = ({data}: any) => {

  const theme = useTheme();
  const { dataFavorites } = usePokemon();
  

  const [ optionModal, setOptionModal ] = useState(false);
  const [ pokemon, setPokemon ] = useState<IPokemonCardDetail>({} as IPokemonCardDetail);

  const handleShowDetailPokemon = (pokemonDetail: IPokemonCardDetail) => {
    setOptionModal(!optionModal);
    setPokemon(pokemonDetail);
  }

  const handleFavoritePokemon = (data: IPokemonCardDetail) => {
    dataFavorites({data});
    data.favorite = !data.favorite;
  }

  return (
    <S.Container>
      <Modal visible={optionModal} close={setOptionModal} dataPoke={pokemon} />
      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: data.images[0].photo}} />          
          <S.BoxFavorite onPress={() => handleFavoritePokemon(data)}>
          {data.favorite
            ? <AntDesign name="heart" size={24} color="red" />
            : <AntDesign name="hearto" size={24} color="black" />
          } 
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>{data.name}</S.TextTitle>
          <S.TextId>ID: {data.id}</S.TextId>

          <S.BoxInfoSpecialty>
            {data.types && data.types.map((type: boolean, index: number) => {
              
              let verify = false;
              if(index % 2 !== 0) {
                verify = true;
              }
              return (
                <S.BoxSpecialty active={verify} key={index}>
                  <S.TextSpecialty active={verify}>{type}</S.TextSpecialty>
                </S.BoxSpecialty>
              );              
            })}
          </S.BoxInfoSpecialty>

          <S.BoxButton>
            <Button 
              title="Ver detalhes" 
              onPress={() => {handleShowDetailPokemon(data)}} 
              font={theme.fonts.medium}
              fontSize={9}
              padding={8}
            />
          </S.BoxButton>
        </S.BoxInfoCard>
      </S.BoxCard>
      
    </S.Container>
  );
}

export { Cards };