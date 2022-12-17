import { useParams } from 'react-router-dom';
import { fetchPokemon } from 'api/API';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './PokemonListId.module.scss';

function PokemonListId() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetchPokemon(name)
      .then(pokemon => {
        setPokemon(pokemon);
      })
      .catch(error => error.message);
  }, [name]);
  return (
    pokemon && (
      <div>
        <div className={s.pokemonBox}>
          <img
            className={s.pokemon_Img}
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </div>

        <div class="overley">
          <p class="overley-project__project-link-text">Hello</p>
        </div>
      </div>
    )
  );
}
export { PokemonListId };
