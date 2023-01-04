import s from './SearchListPokemon.module.scss';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

function SearchListPokemon({ arraySearch }) {
  return (
    <Container xs={12} sm={6} md={4}>
      <div className={s.box}>
        <ul className={s.box_list}>
          {arraySearch.map(pokemon => (
            <li key={pokemon.id} className={s.box_item}>
              <Link to={pokemon.name.toLowerCase()}>
                <span className={s.box_text}>{pokemon.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default SearchListPokemon;
