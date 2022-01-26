import React, {useEffect, useState} from 'react'; 
import { ActivityIndicator, Alert } from 'react-native';
import uuid from 'react-native-uuid';

import { ButtonLogout } from '../../components/ButtonLogout';
import { ButtonsGroup } from '../../components/ButtonsGroup';
import { ButtonTheme } from '../../components/ButtonTheme';
import { Cards } from '../../components/Cards';
import { useTheme } from 'styled-components';
import { Menu } from '../../components/Menu';
import { IPokemonCardDetail } from '../../Dtos/Pokemons';
import { usePokemon } from '../../hooks/Pokemon';

import S from './styled';
import { getCardPokemon, listPokemon } from '../../services/resources/poke';

const AllPosts = () => {
  const theme = useTheme();
  const { pokemonFavoriteStorage } = usePokemon();

  const [dataPokemon, setDataPokemon] = useState<IPokemonCardDetail[]>([]);
  const [filterTypePokemon, setFilterTypePokemon] = useState<IPokemonCardDetail[]>([])
  const [loadingData, setLoadingData] = useState(true);
  const [choiceSearchTypePokemon, setChoiceSearchTypePokemon] = useState(false);
  const [ loadingSearch, setLoadingSearch ] = useState(false);
  const [ offset, setOffset ] = useState(0);
  const [ limit, setLimit ] = useState(20);

  useEffect(() => {
    getPokemonCard();
  }, [offset]);

  const getPokemonCard = async () => {
    try {
      const insertPokemonList: IPokemonCardDetail[] = [];
      const loadPokemon = await listPokemon(limit, offset);
        for(let i=0; i<loadPokemon.results.length; i++){
          let id = loadPokemon.results[i].url.split('/')[6];
          let pokemonData = await getCardPokemon(id);
          let verifyFavorite = pokemonFavoriteStorage.find((data) => data.id === pokemonData.id);
          let statsPoke = pokemonData.stats.map((stat: { stat: { name: string; }; base_stat: number; }) => {
            let obj = {
              name: stat.stat.name,
              base_stat: stat.base_stat
            };
            return obj;
          });
          let typesPokemonCards = pokemonData.types.map((types: { type: { name: string; }; }) => {
            return types.type.name;
          });
          const stats: {name: string, base_stat: number}[] = await Promise.all(statsPoke);
          const pokemonTypes: string[] = await Promise.all(typesPokemonCards);
          let data = {
            id: pokemonData.id,
            name: pokemonData.name,        
            images: [
              {photo: pokemonData.sprites.front_default },
              {photo: pokemonData.sprites.back_shiny },
              {photo: pokemonData.sprites.front_shiny }
            ],
            favorite: verifyFavorite === undefined ? false : true,
            height: pokemonData.height,
            weight: pokemonData.weight,
            types: pokemonTypes,
            stats: stats,
          }
          insertPokemonList.push(data);
        }      
        if(insertPokemonList.length === 20) {
          setLoadingSearch(false);
          setLoadingData(false);
          setDataPokemon([...dataPokemon, ...insertPokemonList]);
          return;
        }
    } catch(err) {
      Alert.alert('Opsss!','Não foi possível realizar essa operação');
      return;
    }  
  }

  const setOptionChoiceButton = (title: string) => {
    if(title !== 'Todos' ) {
      setLoadingData(true);
      setChoiceSearchTypePokemon(true);
      const TypePokemon = dataPokemon.filter(obj => obj.types[0] === title.toLowerCase());
      setTimeout(() => {
        if(TypePokemon.length > 0) {
          setFilterTypePokemon(TypePokemon);
          setLoadingData(false);
          return;
        }

        Alert.alert(
          `Sem pokemon ${title} nessa lista`,
          'Você pode carregar mais pokemons na lista Todos.'
        );
        setFilterTypePokemon([]);
        setLoadingData(false);        
        return;
      }, 200);
      return;
    }
    setLoadingData(true);
    setChoiceSearchTypePokemon(false);
    setTimeout(() => {
      setLoadingData(false);
      return;
    }, 200);
    return;
  }

  const searchNewsPokemons = async () => {
    setLoadingSearch(true);
    setOffset(offset + 20);
    return;
  }

  return (
    <S.Container>
      <Menu screenActive='all' />

      <S.BoxButtonGroup>
        <ButtonsGroup setPokemonCardSpecification={setOptionChoiceButton} />
      </S.BoxButtonGroup>

      {loadingData 
        ? 
          <S.BoxLoadingActivity>
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
          </S.BoxLoadingActivity>
        :
          <S.ListCards 
            data={choiceSearchTypePokemon ? filterTypePokemon : dataPokemon}
            keyExtractor={(item) => uuid.v4().toString()}
            numColumns={2}
            onEndReached={choiceSearchTypePokemon ? () => {} : searchNewsPokemons}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => 
              <Cards 
                data={item}
              />}
            style={{ 
              flex: 1,
              padding: 24,
              marginTop: 20,
            }}
          />
      }
      
      {loadingSearch &&
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