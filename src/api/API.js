const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(name) {
  return fetch(`${BASE_URL}/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

export { fetchPokemon };
