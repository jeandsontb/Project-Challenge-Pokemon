import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { Button } from '../Button';

const Cards = () => {

  const theme = useTheme();

  return (
    <S.Container>
      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: 'https://i.pinimg.com/originals/9a/7b/a2/9a7ba23f62d913cc4e0c8e590b50995c.png'}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>Pikachu</S.TextTitle>
          <S.TextId>ID: 101</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>Elétrico</S.TextSpecialty>
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

      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: 'https://i.pinimg.com/originals/9a/7b/a2/9a7ba23f62d913cc4e0c8e590b50995c.png'}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>Pikachu</S.TextTitle>
          <S.TextId>ID: 101</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>Elétrico</S.TextSpecialty>
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

      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: 'https://i.pinimg.com/originals/9a/7b/a2/9a7ba23f62d913cc4e0c8e590b50995c.png'}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>Pikachu</S.TextTitle>
          <S.TextId>ID: 101</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>Elétrico</S.TextSpecialty>
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

      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: 'https://i.pinimg.com/originals/9a/7b/a2/9a7ba23f62d913cc4e0c8e590b50995c.png'}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>Pikachu</S.TextTitle>
          <S.TextId>ID: 101</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>Elétrico</S.TextSpecialty>
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

      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: 'https://i.pinimg.com/originals/9a/7b/a2/9a7ba23f62d913cc4e0c8e590b50995c.png'}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>Pikachu</S.TextTitle>
          <S.TextId>ID: 101</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>Elétrico</S.TextSpecialty>
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

      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: 'https://i.pinimg.com/originals/9a/7b/a2/9a7ba23f62d913cc4e0c8e590b50995c.png'}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>Pikachu</S.TextTitle>
          <S.TextId>ID: 101</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>Elétrico</S.TextSpecialty>
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

      <S.BoxCard style={{elevation: 5}}>
        <S.BoxImagePoke>
          <S.ImagePoke source={{uri: 'https://i.pinimg.com/originals/9a/7b/a2/9a7ba23f62d913cc4e0c8e590b50995c.png'}} />
          <S.BoxFavorite>
          <AntDesign name="hearto" size={24} color="black" />
          <AntDesign name="heart" size={24} color="red" />
          </S.BoxFavorite>
        </S.BoxImagePoke>

        <S.BoxInfoCard>
          <S.TextTitle>Pikachu</S.TextTitle>
          <S.TextId>ID: 101</S.TextId>

          <S.BoxInfoSpecialty>
            <S.BoxSpecialty active={false}>
              <S.TextSpecialty active={false}>Elétrico</S.TextSpecialty>
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