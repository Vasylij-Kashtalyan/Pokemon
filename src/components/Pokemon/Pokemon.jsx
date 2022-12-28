import s from './Pokemon.module.scss';
import { Link, useLocation } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      <li className={s.list_item}>
        <Link state={{ from: location }} to={pokemon.name}>
          <img
            className={s.list_img}
            src={pokemon.sprites['front_default']}
            alt={pokemon.name}
            loading="lazy"
          />
          <h5 className={s.title}>{pokemon.name}</h5>
        </Link>
      </li>
    </ul>
  );
};

export { Pokemon };
