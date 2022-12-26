import { useState, useEffect } from 'react';
import { Container, ImageList, ImageListItem } from '@mui/material';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { fetchPokemonAll } from 'api/API';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(20);
  const [limit, setLimint] = useState(40);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getMorPokemon() {
      try {
        const data = await fetchPokemonAll(offset, limit);

        setPokemons(data.results);

        function createPokemonDetals(pokemons) {
          pokemons.map(async pokemon => {
            const response = await fetch(pokemon.url);
            const data = await response.json();

            setDetails(prev => [...prev, data]);
          });
        }
        createPokemonDetals(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMorPokemon();
  }, [limit, offset]);

  return (
    <Container xs={12} sm={6} md={4}>
      {details.map((pokemon, i) => (
        <Pokemon pokemon={pokemon} key={i} />
      ))}
      <button onClick={() => setOffset(limit + offset)}>Load More</button>
    </Container>
  );
}

export { PokemonList };
