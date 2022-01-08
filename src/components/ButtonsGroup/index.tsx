import React, {useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import S from './styled';

const ButtonsGroup = () => {

  const [optionsButtons, setOptionsButtons] = useState([
    {id:0, active: true, title: 'Todos'},
    {id:1, active: false, title: 'Fire'},
    {id:2, active: false, title: 'Electric'},
    {id:3, active: false, title: 'Water'}
  ]);

  const handleActiveFilterButtonClick = (id: number) => {
    let vectorOptButtons = [...optionsButtons];
    let buttonsAction = optionsButtons.filter(action => action.active !== false);
    setOptionsButtons([]);
    
    if(buttonsAction[0].id !== id) {
      vectorOptButtons[id].active = true;
      vectorOptButtons[buttonsAction[0].id].active = false;
      setOptionsButtons(vectorOptButtons);
    }

  }

  return (
    <S.Container>
      {optionsButtons.map((item)=> (
        <S.BoxButton key={item.id} active={item.active}>
          <TouchableWithoutFeedback onPress={() => handleActiveFilterButtonClick(item.id)} >
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