import React from 'react';
import { Pokemon } from './Pokemon';

const ListPok = ({ pokemons }) => {
  return (
    <>
      <div className="container pokemon_list">
        <div className="row">
          {pokemons.map((pokemon, i) => (
            <Pokemon key={i} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
};

export { ListPok };
