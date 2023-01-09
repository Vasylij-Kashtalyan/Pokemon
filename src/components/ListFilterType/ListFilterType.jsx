import s from './ListFilterType.module.scss';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

function ListFilterType({ details, setDetails }) {
  const [types, setTypes] = useState([]);

  // ---------------FilterTypesPokemon------------- //
  const filterType = type => {
    const allPokemon = [...details];

    if (details.length > 0) {
      let listType = allPokemon.filter(pokemon =>
        pokemon.types.some(som => som.type.name === type)
      );

      console.log(listType);
      if (listType.length > 0) setDetails(listType);
    }
  };

  // ---------------FetchTypesPokemon------------- //
  useEffect(() => {
    const getTypePokemon = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/type');
      const response = await data.json();
      setTypes(response.results);
    };

    getTypePokemon();
  }, []);

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
