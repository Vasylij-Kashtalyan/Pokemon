import s from './PokemonList.module.scss';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Container } from 'components/Container/Container';
import { Button } from '@mui/material';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { fetchPokemonAll } from 'api/API';
import Search from 'components/Search';
import pokemons from 'json-pokemon';
import filterPokemonsByName from 'utils/filterPokemonsByName';
import SearchListPokemon from 'components/SearchListPokemon/SearchListPokemon';
import { Link } from 'react-router-dom';

function PokemonList() {
  const [pokemon, setPokemons] = useState([]);
  const [offset, setOffset] = useState(20);
  const [limit, setLimint] = useState(40);
  const [details, setDetails] = useState([]);
  const [name, setName] = useState('');
  const [arraySearch, setArraySearch] = useState([]);

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
    if (name.trim() === '') return;

    if (name.length === 0) {
      return toast.error(`No pictures with name: "${name}".`);
    }

    if (name) {
      let filtePokemons = pokemons.filter(filterPokemonsByName(name));
      setArraySearch(filtePokemons);
    }
  }, [name]);
  // -----------------NextPage---------------- //
  const nextPage = () => {
    setOffset(limit + offset);
  };

  // -----------------SetName---------------- //
  const handlerSetName = name => {
    setName(name);
  };
  return (
    <>
      <section className={s.section}>
        <Search onChange={handlerSetName} />
      </section>

      <Container>
        {arraySearch.length ? (
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
      <ToastContainer />
    </>
  );
}

export default PokemonList;
