import s from './PokemonList.scss';
import { fetchPokemonAll } from 'api/API';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function PokemonList() {
  const [pokemon, setPokemon] = useState(null);

  useState(() => {
    fetchPokemonAll().then(({ results }) => {
      setPokemon(results);
    });
  });

  return (
    <>
      <ul>
        {pokemon &&
          pokemon.map(({ name, url }) => (
            <li key={name}>
              <Link to="/:pokemonId">{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export { PokemonList };
