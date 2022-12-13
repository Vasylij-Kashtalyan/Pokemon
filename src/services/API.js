import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

async function fetchCard(name, page) {
  const res = await axios.get(`${BASE_URL}?&q=${name}&page=${page}`);
  return res;
}

export { fetchCard };
