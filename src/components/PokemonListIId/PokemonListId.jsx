import { useParams } from 'react-router-dom';
import { fetchPokemon } from 'api/API';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './PokemonListId.module.scss';
import { Container } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
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
        <Link className={s.link} to="reviews">
          Reviews
        </Link>
        <Outlet />
      </Container>
    )
  );
}
export { PokemonListId };
