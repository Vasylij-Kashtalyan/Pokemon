import s from './Pokemon.module.scss';
import { Link, useLocation } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  const picturePok = pokemon.sprites.other['official-artwork'].front_default;
  const idPok = pokemon.game_indices[0]['game_index'];

  const location = useLocation();

  return (
    <ul className={s.list}>
      <li className={s.list_item}>
        <Link state={{ from: location }} to={pokemon.name}>
          <h5 className={s.list_title}>
            {pokemon.name} #{idPok}
          </h5>

          <img
            className={s.list_img}
            src={picturePok}
            alt={pokemon.name}
            loading="lazy"
          />

          <span className={s.list_title}>Exp:{pokemon.base_experience}</span>
        </Link>
      </li>
    </ul>
  );
};

export { Pokemon };
