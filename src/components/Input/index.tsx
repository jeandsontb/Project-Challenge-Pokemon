import React from 'react';
import { TextInputProps } from 'react-native';

import S from './styled';

type IProps = TextInputProps;

const Input = ({...rest}: IProps) => {
  return (
    <S.Container
      {...rest}
    />
  );
}

export { Input };