import React, {useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import S from './styled';

interface IButtonsGroupProps {
  setPokemonCardSpecification: (id: string) => void;
}

const ButtonsGroup = ({setPokemonCardSpecification}: IButtonsGroupProps) => {

  const [optionsButtons, setOptionsButtons] = useState([
    {id:0, active: true, title: 'Todos'},
    {id:1, active: false, title: 'Fire'},
    {id:2, active: false, title: 'Electric'},
    {id:3, active: false, title: 'Water'}
  ]);

  const handleActiveFilterButtonClick = (id: number, title: string) => {
    let optionsButtonChoice = [...optionsButtons];
    let newOptionButton = optionsButtonChoice.map(event => {
      event.active = false;
      if(event.id === id) {
        event.active = true;
      }
      return event;
    });
    setOptionsButtons(newOptionButton);
    setPokemonCardSpecification(title);
    return;
  }

  return (
    <S.Container>
      {optionsButtons.map((item)=> (
        <S.BoxButton key={item.id} active={item.active}>
          <TouchableWithoutFeedback 
            onPress={() => handleActiveFilterButtonClick(item.id, item.title)} 
          >
            <S.ButtonChoiceListPokem active={item.active} >
              <S.TextButtonChoice>{item.title}</S.TextButtonChoice>
            </S.ButtonChoiceListPokem>
          </TouchableWithoutFeedback>
        </S.BoxButton>
      ))}
    </S.Container>
  );
}

export { ButtonsGroup };