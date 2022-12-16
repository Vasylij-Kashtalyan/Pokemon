import { useParams } from 'react-router-dom';
import { fetchPokemonId } from 'api/API';
import { useEffect } from 'react';
import { useState } from 'react';

function PokemonListId() {
  const [pokemon, setPokemon] = useState([]);
  const { pokemonId } = useParams();

  useEffect(() => {
    fetchPokemonId(pokemonId)
      .then(pokemon => {
        setPokemon(pokemon);
      })
      .catch(error => error.message);
  }, [pokemonId]);
  return (
    <div>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
    </div>
  );
}
export { PokemonListId };
