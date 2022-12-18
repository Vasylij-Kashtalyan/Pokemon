import { useParams } from 'react-router-dom';
import { fetchPokemon } from 'api/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '@mui/material';
import { PokemonPage } from 'components/PokemonPage/PokemonPage';

function PokemonListId() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetchPokemon(name)
      .then(results => {
        setPokemon(results);
      })
      .catch(error => error.message);
  }, [name]);
  return (
    pokemon && (
      <Container xs={12} sm={6} md={4}>
        <PokemonPage pokemon={pokemon} />
      </Container>
    )
  );
}
export { PokemonListId };
