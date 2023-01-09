import s from './ListFilterType.module.scss';

function ListFilterType({ types, filterType }) {
  return (
    <div className={s.listTypes}>
      {types.length > 0 &&
        types.map(pokemon => (
          <button
            className={`${s.listTypes_button} ${pokemon.name}`}
            onClick={() => filterType(pokemon.name)}
            key={pokemon.name}
          >
            {pokemon.name}
          </button>
        ))}
    </div>
  );
}

export default ListFilterType;
