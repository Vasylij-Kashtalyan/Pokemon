import s from './Pokemon.module.scss';
import { Link } from 'react-router-dom';
import { ImageList, ImageListItem } from '@mui/material';

const Pokemon = ({ pokemon }) => {
  return (
    <Link to={pokemon.name}>
      <ImageList variant="masonry" cols={3} gap={8}>
        <ImageListItem>
          <img
            src={`${pokemon.sprites['front_default']}?w=248&fit=crop&auto=format`}
            alt={pokemon.name}
            loading="lazy"
          />

          <ul>
            <h5 className={s.title}>{pokemon.name}</h5>
            <li className={s.list}>Type: {pokemon.types[0].type.name}</li>
          </ul>
        </ImageListItem>
      </ImageList>
    </Link>
  );
};

export { Pokemon };
