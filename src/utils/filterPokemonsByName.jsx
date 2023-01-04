function filterPokemonsByName(filterName) {
  return pokemon => {
    const lowerCasePokemonName = pokemon.name.toLowerCase();
    const lowerCaseFilterName = filterName.toLowerCase();
    return lowerCasePokemonName.includes(lowerCaseFilterName);
  };
}
export default filterPokemonsByName;
