import s from './PokemonList.module.scss';
import { fetchPokemonAll } from 'api/API';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@mui/material';

function PokemonList() {
  const [pokemons, setPokemon] = useState(null);

  useState(() => {
    fetchPokemonAll().then(({ results }) => {
      setPokemon(results);
    });
  }, []);
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pokemons &&
          pokemons.map(pokemon => (
            <Grid item xs={2} sm={4} md={4}>
              <Link className={s.pokemonList_link} to={pokemon.name}>
                {pokemon.name}
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export { PokemonList };
