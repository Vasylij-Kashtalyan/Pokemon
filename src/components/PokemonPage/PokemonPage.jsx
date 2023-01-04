import s from './PokemoPage.module.scss';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { BoxPage } from 'components/BoxPage/BoxPage';

function PokemonPage({ pokemon, abilities }) {
  const picturePok = pokemon.sprites.other['official-artwork'].front_default;
  const typePok = pokemon.types[0].type.name;

  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    if (location?.state?.from) {
      const { pathname, search } = location?.state?.from;

      return navigate(`${pathname}${search}`);
    }
    return navigate('/');
  };

  return (
    pokemon && (
      <BoxPage>
        <Button onClick={goBack}>Back</Button>

        <div className={s.box}>
          {/* ------Picture----- */}
          <img className={s.box_img} src={picturePok} alt={pokemon.name} />

          <ul className={s.list}>
            <h1 className={s.list_title}>{pokemon.name}</h1>

            {/* ------Type----- */}
            <li className={s.list_item}>Type: {typePok}</li>

            {/* ------Stats----- */}
            {pokemon.stats.map(entry => (
              <li className={s.list_item} key={entry.stat.name}>
                {entry.stat.name}: {entry.base_stat}
              </li>
            ))}
          </ul>
        </div>

        {/* ------Abilities----- */}
        {abilities.effect ? (
          <div className={s.box_effect}>
            {abilities.effect ? (
              <>
                <h2 className={s.list_title}>Abilities</h2>
                <p>Effect</p>
                <span className={s.box_text}>{abilities.effect}</span>
              </>
            ) : (
              <span className={s.box_text}>Not effect</span>
            )}

            {abilities.short_effect ? (
              <>
                <p>Short Effect</p>
                <span className={s.box_text}>{abilities.short_effect}</span>
              </>
            ) : (
              <span className={s.box_text}>Not short effect</span>
            )}
          </div>
        ) : (
          <span className={s.box_text}>Not effect</span>
        )}
      </BoxPage>
    )
  );
}
export { PokemonPage };
