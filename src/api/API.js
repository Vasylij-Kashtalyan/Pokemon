const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(name) {
  return fetch(`${BASE_URL}/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
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
