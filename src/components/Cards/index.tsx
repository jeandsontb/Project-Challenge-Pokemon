import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { Button } from '../Button';

const Cards = ({data}: any) => {

  const theme = useTheme();

  const [ favorite, setFavorite ] = useState(false);

  return (
    <S.Container>
      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: data.image}} />          
          <S.BoxFavorite>
          {favorite 
            ? <AntDesign name="heart" size={24} color="red" />
            : <AntDesign name="hearto" size={24} color="black" />
          }          
          
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