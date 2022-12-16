const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(name) {
  return fetch(`${BASE_URL}/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}
function fetchPokemonId(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

function fetchPokemonAll() {
  return fetch(`${BASE_URL}/pokemon?limit=100000&offset=0`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export { fetchPokemon, fetchPokemonAll, fetchPokemonId };
