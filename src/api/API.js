const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(pokemon) {
  return fetch(`${BASE_URL}/pokemon/${pokemon}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${pokemon}`));
  });
}

function fetchPokemonAll(offset, limit) {
  return fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
    }
  );
}

export { fetchPokemon, fetchPokemonAll };
