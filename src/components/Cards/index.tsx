import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { usePokemon } from '../../hooks/Pokemon';

const Cards = ({data}: any) => {

  const theme = useTheme();
  const { showModalDetail } = usePokemon();

  const handleShowDetailPokemon = (name: string) => {
    showModalDetail(name);
  }

  return (
    <S.Container>

      <Modal />

      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: data.image}} />          
          <S.BoxFavorite>
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
            {data.type && data.type.map((type: boolean, index: number) => {
              
              let verify = false;
              if(index % 2 !== 0) {
                verify = true;
              }
              return (
                <S.BoxSpecialty active={verify}>
                  <S.TextSpecialty active={verify}>{type}</S.TextSpecialty>
                </S.BoxSpecialty>
              );              
            })}
          </S.BoxInfoSpecialty>

          <S.BoxButton>
            <Button 
              title="Ver detalhes" 
              onPress={() => {handleShowDetailPokemon(data.name)}} 
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