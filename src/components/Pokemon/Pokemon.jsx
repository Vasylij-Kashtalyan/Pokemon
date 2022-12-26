import s from './Pokemon.module.scss';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  return (
    <ul className={s.list}>
      <li className={s.list_item}>
        <Link to={pokemon.name}>
          {/* <span>{pokemon.id}</span> */}
          <img
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
