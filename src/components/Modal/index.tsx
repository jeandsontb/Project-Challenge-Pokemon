import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { Button } from '../Button';
import { IPokemonCardDetail } from '../../Dtos/Pokemons';
import { usePokemon } from '../../hooks/Pokemon';

interface IModalProps {
  visible: boolean;
  dataPoke: IPokemonCardDetail;
  close: (close: boolean) => void;
}

const Modal = ({visible, close, dataPoke}: IModalProps) => {
  const theme = useTheme();
  const { dataFavorites } = usePokemon();

  const handleCloseModal = () => {
    close(!visible);
  };  

  const handleFavoritePokemon = (data: IPokemonCardDetail) => {
    dataFavorites({data});
    dataPoke.favorite = !data.favorite;
    close(!visible);
  }

  return (
    <S.Container
      visible={visible}
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

        {Object.keys(dataPoke).length > 0 &&
          <>
            <S.BoxPokemon>
              <S.TextName>{dataPoke.name}</S.TextName>
              <S.BoxImagesPokemon>
                <S.ScrollPokemon 
                  horizontal={true} 
                  showsHorizontalScrollIndicator={false}
                >
                  {dataPoke.images.map((item, index) => (
                    <S.BoxImage key={index} >
                      <S.ImagePokemon source={{uri: item.photo}} />
                    </S.BoxImage>
                  ))}
                  
                </S.ScrollPokemon>
              </S.BoxImagesPokemon>
            </S.BoxPokemon>

            <S.BoxDetailPokemon>
              <S.TextHeight>
                {dataPoke.height > 100 
                  ? dataPoke.height * 0.01 + 'm'
                  : dataPoke.height + '0cm'
                } 
              </S.TextHeight>
              <S.TextWeight>{dataPoke.weight}kg</S.TextWeight>
            </S.BoxDetailPokemon>

            <S.BoxTypeButtonPokemon>
              {dataPoke.types.map((item, index) => {
                let status = false;
                if(index % 2 === 0) {
                  status = true;
                }
                return (
                <S.BoxTypePokemon key={index} backgroundColor={status}>
                  <S.TextTitleType backgroundColor={status} >{dataPoke.types}</S.TextTitleType>
                </S.BoxTypePokemon>
                );
              })}
            </S.BoxTypeButtonPokemon>

            <S.TextStatiscics>Estatisticas</S.TextStatiscics>

            <S.BoxStatistics>
              <S.BoxStatisticsPerfil>
                {dataPoke.stats.map((item, index) => (
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
                title={dataPoke.favorite ? "Retirar dos favoritos" : "Adicionar aos favoritos"}
                onPress={() => handleFavoritePokemon(dataPoke)}
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