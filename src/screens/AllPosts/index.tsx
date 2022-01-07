import React, {useState, useEffect} from 'react'; 
import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonsGroup } from '../../components/ButtonsGroup';
import { ButtonTheme } from '../../components/ButtonTheme';
import { Cards } from '../../components/Cards';

import { Menu } from '../../components/Menu';
import { listPokemon } from '../../services/resources/poke';

import S from './styled';

interface IListPokemonsData {
  name: string;
  url: string;
}

const AllPosts = () => {

  const [ listPokemons, setListPokemons ] = useState<IListPokemonsData[]>([]);

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await listPokemon(20, 0);
      
      if(response) {
        let data: IListPokemonsData[] = response.map(data => {
          return {
            name: data.name,
            url: data.url
          }
        });

        setListPokemons(data);
      }
            
    }

    getPokemonList();
  }, []);

  console.log(listPokemon);

  return (
    <S.Container>
      <Menu screenActive='all' />

      <S.BoxButtonGroup>
        <ButtonsGroup />
      </S.BoxButtonGroup>

      <S.BoxCards>
        <S.ScrollCards>
          <Cards />
        </S.ScrollCards>
      </S.BoxCards>

      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { AllPosts };