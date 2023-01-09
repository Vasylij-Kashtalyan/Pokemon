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

function PokemonList() {
  const [arraySearch, setArraySearch] = useState([]);
  const [pokemon, setPokemons] = useState([]);
  const [details, setDetails] = useState([]);
  const [offset, setOffset] = useState(20);
  const [limit, setLimint] = useState(80);
  const [name, setName] = useState('');

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
  }, [limit, offset]);

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

  return (
    <>
      <Container>
        <Search onChange={handlerSearchName} />
        {details.length > 0 && (
          <ListFilterType details={details} setDetails={setDetails} />
        )}

        {name.length >= 2 && arraySearch.length > 0 ? (
          <SearchListPokemon arraySearch={arraySearch} />
        ) : (
          <>
            {details.map((pokemon, i) => (
              <Pokemon pokemon={pokemon} key={i} />
            ))}

            <div className={s.btnMore}>
              <Button onClick={() => nextPage()}>Load More</Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default PokemonList;
