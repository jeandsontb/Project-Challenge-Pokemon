import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import S from './styled';

interface IButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress, ...rest}: IButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Button {...rest}>
        <S.TextTitleButton>
          {title}
        </S.TextTitleButton>
      </S.Button>
    </TouchableWithoutFeedback>
  );
}

export { Button };