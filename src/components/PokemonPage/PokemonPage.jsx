import s from './PokemoPage.module.scss';

function PokemonPage({ pokemon }) {
  const { sprites, name, stats, types } = pokemon;
  return (
    <div className={s.pokemonBox}>
      <img
        className={s.pokemon_Img}
        src={sprites.other['official-artwork'].front_default}
        alt={name}
      />

      <ul className={s.pokemonList}>
        <h1 className={s.pokemonTitle}>{name}</h1>
        {types.map(({ type }) => (
          <li className={s.pokemonItem} key={type.name}>
            Type: {type.name}
          </li>
        ))}

        {stats.map(entry => (
          <li className={s.pokemonItem} key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
export { PokemonPage };
