import s from './PokemonList.module.scss';
import Search from 'components/Search';
import pokemons from 'json-pokemon';
import SearchListPokemon from 'components/SearchListPokemon/SearchListPokemon';
import filterPokemonsByName from 'utils/filterPokemonsByName';
import ListFilterType from 'components/ListFilterType';

import { useState, useEffect } from 'react';
import { fetchPokemonAll } from 'api/API';
import { Container } from 'components/Container/Container';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

function PokemonList() {
  const [arraySearch, setArraySearch] = useState([]);
  const [pokemon, setPokemons] = useState([]);
  const [details, setDetails] = useState([]);
  const [offset, setOffset] = useState(20);
  const [limit, setLimint] = useState(80);
  const [name, setName] = useState('');
  const [types, setTypes] = useState([]);
  const [fil, setFil] = useState([]);

  console.log(fil);

  useEffect(() => {
    try {
      const getMorPokemon = async () => {
        const data = await fetchPokemonAll(offset, limit);
        setPokemons(data.results);

        const createPokemonDetals = async pokemon => {
          pokemon.map(async pokemon => {
            const response = await fetch(pokemon.url);
            const data = await response.json();

            setDetails(prev => [...prev, data]);
          });
        };

        createPokemonDetals(data.results);
      };

      getMorPokemon();
    } catch (error) {
      console.log(error);
    }
  }, [limit, offset, types]);

  // -----------------SearchByName---------------- //
  useEffect(() => {
    if (!name.trim()) return;

    if (name) {
      let filtePokemons = pokemons.filter(filterPokemonsByName(name));
      setArraySearch(filtePokemons);
    }
  }, [name]);

  // -----------------NextPage---------------- //
  const nextPage = () => {
    setOffset(limit + offset);
    setLimint();
  };

  // -----------------HandlerSearchName---------------- //
  const handlerSearchName = name => {
    setName(name);
  };

  // ---------------FilterTypesPokemon------------- //
  const filterType = type => {
    const allPokemon = [...details];

    if (details.length > 0) {
      let listType = allPokemon.filter(pokemon =>
        pokemon.types.some(som => som.type.name === type)
      );

      console.log(listType);

      if (listType.length === 0) {
        toast.info(`Not pokemon by types ${type}...`);
      } else {
        setFil(listType);
      }
    }
  };

  // ---------------FetchTypesPokemon------------- //
  useEffect(() => {
    const getTypePokemon = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/type');
      const response = await data.json();
      setTypes(response.results);
    };

    getTypePokemon();
  }, []);

  return (
    <>
      <Container>
        <Search onChange={handlerSearchName} />

        <ListFilterType types={types} filterType={filterType} />

        {name.length >= 2 && arraySearch.length > 0 ? (
          <SearchListPokemon arraySearch={arraySearch} />
        ) : (
          <>
            {details.map((pokemon, i) => (
              <Pokemon pokemon={pokemon} key={i} />
            ))}

            {details && (
              <div className={s.btnMore}>
                <Button onClick={() => nextPage()}>Load More</Button>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default PokemonList;
