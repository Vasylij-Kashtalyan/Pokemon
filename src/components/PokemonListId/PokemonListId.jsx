import { useParams } from 'react-router-dom';
import { fetchPokemon } from 'api/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { PokemonPage } from 'components/PokemonPage/PokemonPage';

function PokemonListId(props) {
  const [pokemon, setPokemons] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    try {
      const getPokemonId = async () => {
        const data = await fetchPokemon(name);
        setPokemons(data);

        const getAbilities = async data => {
          data.abilities.map(async ({ ability }) => {
            const response = await fetch(ability.url);
            const data = await response.json();

            setAbilities(data.effect_entries['1']);
          });
        };

        getAbilities(data);
      };
      getPokemonId();
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  return pokemon && <PokemonPage pokemon={pokemon} abilities={abilities} />;
}
export default PokemonListId;
