import { useParams } from 'react-router-dom';
import { fetchPokemon } from 'api/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { PokemonPage } from 'components/PokemonPage/PokemonPage';

function PokemonListId(props) {
  const [pokemon, setPokemons] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [type, setType] = useState('');
  const [picture, setPicture] = useState(null);
  const [stats, setStats] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    try {
      const getPokemonId = async () => {
        const data = await fetchPokemon(name);
        setPokemons(data);
        setType(data.types[0].type.name);
        setStats(data.stats);
        setPicture(data.sprites.other['official-artwork'].front_default);

        const getAbilities = async data => {
          data.abilities.map(async ({ ability }) => {
            const response = await fetch(ability.url);
            const data = await response.json();
            console.log(data);

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

  return (
    pokemon && (
      <PokemonPage
        stats={stats}
        picture={picture}
        type={type}
        pokemon={pokemon}
        abilities={abilities}
      />
    )
  );
}
export default PokemonListId;
