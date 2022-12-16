const { fetchPokemon } = require('api/API');
const { useEffect } = require('react');
const { useState } = require('react');

const PokemonInfo = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState({ status: 'idle' });

  useEffect(() => {
    if (!name) return;

    fetchPokemon(name)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus({ status: 'pending' });
      })
      .catch(error => {
        setError(error);
        setStatus({ status: 'rejected' });
      });
  }, [name]);
};
