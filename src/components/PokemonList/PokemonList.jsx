import { Button } from '@mui/material';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './PokemonList.module.scss';

function PokemonList({ details, fil, nextPage }) {
  console.log(fil);

  const { pathname } = useLocation();

  if (pathname === '/type') {
    return (
      <>
        {fil.map((pokemon, i) => (
          <Pokemon pokemon={pokemon} key={i} />
        ))}
      </>
    );
  } else {
    return (
      <>
        {details.map((pokemon, i) => (
          <Pokemon pokemon={pokemon} key={i} />
        ))}

        <div className={s.btnMore}>
          <Button onClick={nextPage}>Load More</Button>
        </div>
      </>
    );
  }
}

export default PokemonList;
