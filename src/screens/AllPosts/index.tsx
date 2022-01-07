import React, { useEffect, useState } from 'react'; 

import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonsGroup } from '../../components/ButtonsGroup';
import { ButtonTheme } from '../../components/ButtonTheme';
import { Cards } from '../../components/Cards';

import { Menu } from '../../components/Menu';
import { getOnePokemon, listPokemon } from '../../services/resources/poke';
import { IPokemonsDto } from '../../Dtos/Pokemons';

import S from './styled';

const AllPosts = () => {

  const [ pokemonData, setPokemonData ] = useState<IPokemonsDto[]>([]);
  const [ pokemonCard, setPokemonCard ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const response = await listPokemon(6, 0);
        const { results } = await listPokemon(1, 0);
        
        
        
        

        console.log(results);




        setPokemonData(response.results); 
        setLoading(false);
      } catch(error) {
        console.log(error);
      }           
    }

    getPokemonList();
  }, []);

  return (
    <S.Container>
      <Menu screenActive='all' />

      <S.BoxButtonGroup>
        <ButtonsGroup />
      </S.BoxButtonGroup>

      
      <S.ListCards 
        data={pokemonData}
        keyExtractor={item => item.name}
        renderItem={({item}) => <Cards data={item} />}
        numColumns={2}
        style={{ 
          flex: 1,
          padding: 24,
          marginTop: 20,
        }}
      />


      <S.BoxCardButtons />

      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { AllPosts };