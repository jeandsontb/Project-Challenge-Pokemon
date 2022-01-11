import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import S from './styled';
import { usePokemon } from '../../hooks/Pokemon';

const Modal = () => {
  const theme = useTheme();

  const { showModalDetail, visibleModal } = usePokemon();

  const handleCloseModal = () => {
    showModalDetail();
  }

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
      </S.BoxContent>
    </S.Container>
  );
}

export { Modal };