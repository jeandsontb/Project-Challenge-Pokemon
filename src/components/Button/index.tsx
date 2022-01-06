import React from 'react';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps} from 'react-native';

import S from './styled';

interface IButtonProps extends TouchableWithoutFeedbackProps {
  title: string;
  background?: string;
  border?: number;
  borderColor?: string;
  color?: string;
  font?: string;
  fontSize?: number;
  onPress: () => void;
}

const Button = ({
  title, 
  background,
  border,
  borderColor,
  color,
  font,
  fontSize,
  onPress, 
  ...rest
}: IButtonProps) => {
  return (
    <S.BoxDetailsButton border={border} borderColor={borderColor} >
      <TouchableWithoutFeedback onPress={onPress}>
          <S.Button {...rest} background={background} >
            <S.TextTitleButton color={color} font={font} fontSize={fontSize} >
              {title}
            </S.TextTitleButton>
          </S.Button>
      </TouchableWithoutFeedback>
    </S.BoxDetailsButton>
  );
}

export { Button };