import s from './PokemonList.module.scss';
import { useState, useEffect } from 'react';
import { Container } from 'components/Container/Container';
import { Button } from '@mui/material';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { fetchPokemonAll } from 'api/API';

function PokemonList() {
  const [pokemon, setPokemons] = useState([]);
  const [offset, setOffset] = useState(20);
  const [limit, setLimint] = useState(40);
  const [details, setDetails] = useState([]);

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

  const nextPage = () => {
    setOffset(limit + offset);
  };

  return (
    <>
      <Container>
        {details &&
          details.map((pokemon, i) => <Pokemon pokemon={pokemon} key={i} />)}
        <div className={s.btnMore}>
          <Button onClick={() => nextPage()}>Load More</Button>
        </div>
      </Container>
    </>
  );
}

export default PokemonList;
