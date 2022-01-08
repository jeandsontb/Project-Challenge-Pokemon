import React, { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { Button } from '../Button';
import { getOnePokemon } from '../../services/resources/poke';

const Cards = ({data}: any) => {

  const theme = useTheme();

  // useEffect(() => {

  //   const getPokemon = async () => {
  //     try {
  //       const response = await getOnePokemon(data.name);

  //       const poke = [
  //         {
  //           id: response.id,
  //           name: response.name,
  //           url: response.sprites.front_default,
  //           type: response.types[0].type.name
  //         }
  //       ]

  //       // console.log(poke);


  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getPokemon();
  // }, [data]);

  return (
    <S.Container>
      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: data.image}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>{data.name}</S.TextTitle>
          <S.TextId>ID: {data.id}</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>{data.type}</S.TextSpecialty>
            </S.BoxSpecialty>
            <S.BoxSpecialty active={true}>
              <S.TextSpecialty active={true}>Fire</S.TextSpecialty>
            </S.BoxSpecialty>
          </S.BoxInfoSpecialty>

          <S.BoxButton>
            <Button 
              title="Ver detalhes" 
              onPress={() => {}} 
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