import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { usePokemon } from '../../hooks/Pokemon';
import { Button } from '../Button';

const Modal = () => {
  const theme = useTheme();

  const { showModalDetail, visibleModal, dataPokemon } = usePokemon();

  const handleCloseModal = () => {
    showModalDetail('close');
  };  

  return (
    <S.Container
      visible={visibleModal}
      animationType="slide"
    >
      <S.BoxContent>
        <S.BoxHeader>
          <S.TextDetail>Detalhes</S.TextDetail>
          <AntDesign 
            name="close" 
            size={24} 
            color={theme.colors.text} 
            onPress={handleCloseModal} 
          />
        </S.BoxHeader>

        {Object.keys(dataPokemon).length > 0 &&
          <>
            <S.BoxPokemon>
              <S.TextName>{dataPokemon.name}</S.TextName>
              <S.BoxImagesPokemon>
                <S.ScrollPokemon 
                  horizontal={true} 
                  showsHorizontalScrollIndicator={false}
                >
                  {dataPokemon.images.map((item, index) => (
                    <S.BoxImage key={index} >
                      <S.ImagePokemon source={{uri: item.photo}} />
                    </S.BoxImage>
                  ))}
                  
                </S.ScrollPokemon>
              </S.BoxImagesPokemon>
            </S.BoxPokemon>

            <S.BoxDetailPokemon>
              <S.TextHeight>
                {dataPokemon.height > 100 
                  ? dataPokemon.height * 0.01 + 'm'
                  : dataPokemon.height + '0cm'
                } 
              </S.TextHeight>
              <S.TextWeight>{dataPokemon.weight}kg</S.TextWeight>
            </S.BoxDetailPokemon>

            <S.BoxTypeButtonPokemon>
              {dataPokemon.types.map((item, index) => {
                let status = false;
                if(index % 2 === 0) {
                  status = true;
                }
                return (
                <S.BoxTypePokemon key={index} backgroundColor={status}>
                  <S.TextTitleType backgroundColor={status} >{dataPokemon.types}</S.TextTitleType>
                </S.BoxTypePokemon>
                );
              })}
            </S.BoxTypeButtonPokemon>

            <S.TextStatiscics>Estatisticas</S.TextStatiscics>

            <S.BoxStatistics>
              <S.BoxStatisticsPerfil>
                {dataPokemon.stats.map((item, index) => (
                  <S.BoxProgressBar key={index}>
                    <S.TextInfo>
                      {item.name === 'hp' ? 'HP' : item.name === 'attack' ? 'ATK' 
                      : item.name === 'defense' ? 'DEF' : item.name === 'special-attack' ? 'S.ATK'
                      : item.name === 'special-defense' ? 'S.DEF' : 'SPD'
                      }
                    </S.TextInfo>

                    <S.BoxContainerProgressBar>
                      <S.BoxBarProgressInitial >
                        <S.BoxBarProgressFinal value={item.base_stat} />
                      </S.BoxBarProgressInitial>
                    </S.BoxContainerProgressBar>

                    <S.TextValue>{item.base_stat}</S.TextValue>
                  </S.BoxProgressBar>
                ))}
              </S.BoxStatisticsPerfil>

              <Button 
                title="Adicionar aos favoritos"
                onPress={() => {}}
                font={theme.fonts.medium}
                fontSize={12}
              />
            </S.BoxStatistics>
          </>
        }
      </S.BoxContent>
    </S.Container>
  );
}

export { Modal };