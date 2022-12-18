import { Pokemon } from '../Pokemon/Pokemon';
import s from './ListPok.module.scss';
const ListPok = ({ pokemons }) => {
  return (
    <>
      <div className={s.pokemon_list}>
        {pokemons.map((pokemon, i) => (
          <Pokemon key={i} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export { ListPok };
