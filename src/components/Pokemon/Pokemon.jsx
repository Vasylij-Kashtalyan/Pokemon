import s from './Pokemon.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';

const Pokemon = ({ pokemon }) => {
  const picturePok = pokemon.sprites.other['official-artwork'].front_default;
  const idPok = pokemon.game_indices[0]['game_index'];
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemon) setLoading(false);
  }, [pokemon]);

  return (
    <ul className={s.list}>
      {loading ? (
        <Skeleton variant="rectangular" width={190} height={240} />
      ) : (
        <li className={`${s.list_item} ${pokemon.types[0].type.name}`}>
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

            <span className={s.list_title}>Exp: {pokemon.base_experience}</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export { Pokemon };
