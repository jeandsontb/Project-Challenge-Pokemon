import React, { useEffect, useState } from 'react'; 
import { ActivityIndicator } from 'react-native';

import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonsGroup } from '../../components/ButtonsGroup';
import { ButtonTheme } from '../../components/ButtonTheme';
import { Cards } from '../../components/Cards';
import { useTheme } from 'styled-components';
import { Menu } from '../../components/Menu';
import { getOnePokemon, listPokemon } from '../../services/resources/poke';
import { IPokemonCardDto } from '../../Dtos/Pokemons';

import S from './styled';

const AllPosts = () => {

  const theme = useTheme();
  
  const [ pokemonCard, setPokemonCard ] = useState<IPokemonCardDto[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ offset, setOffset ] = useState(0)

  useEffect(() => {
    setLoading(true);
    getPokemonCard();
  }, [offset]);

  const getPokemonCard = async () => {
    try {
      const { results } = await listPokemon(10, offset);

      const getPokemonList = results.map(async(item: { name: string; }) => {
        const data = await getOnePokemon(item.name)
         return {
           id: data.id,
           name: data.name,
           image: data.sprites.front_default,
           type: data.types[0].type.name
         };
       });

      const pokemonList = await Promise.all(getPokemonList);

      setLoading(false);
      setPokemonCard([...pokemonCard, ...pokemonList]);

    } catch(error) {
      console.log(error);
    } 
  }

  const handleLoadingNewsPokemons = () => {
    setOffset(offset + 1);
    console.log('chegou aqui')
  }

  console.log(offset);
  return (
    <S.Container>
      <Menu screenActive='all' />

      <S.BoxButtonGroup>
        <ButtonsGroup />
      </S.BoxButtonGroup>
      
      <S.ListCards 
        data={pokemonCard}
        keyExtractor={item => item.name}
        renderItem={({item}) => 
          <Cards 
          data={item} 
        />}
        numColumns={2}
        onEndReached={handleLoadingNewsPokemons}
        style={{ 
          flex: 1,
          padding: 24,
          marginTop: 20,
        }}
      />

      {loading &&
        <ActivityIndicator 
          size='large'
          color={theme.colors.text}
          style={{
            width: '100%', 
            height: 20, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: 15
          }}
        />
      }

      <S.BoxCardButtons />

      <ButtonTheme />

      <ButtonLogout />
    </S.Container>
  );
}

export { AllPosts };