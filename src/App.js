import filterPokemonsByName from 'utils/filterPokemonsByName';
import 'react-toastify/dist/ReactToastify.css';
import pokemons from 'json-pokemon';

import { toast } from 'react-toastify';
import { fetchPokemonAll } from 'api/API';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import PokemonListId from './components/PokemonListId';
import { Suspense, lazy, useState, useEffect } from 'react';
import { Container } from './components/Container/Container';

const ListFilterType = lazy(() => import('./components/ListFilterType'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const PokemonList = lazy(() => import('./components/PokemonList'));
const AppBar = lazy(() => import('./components/AppBar/AppBar'));
const SearchListPokemon = lazy(() =>
  import('./components/SearchListPokemon/SearchListPokemon')
);
const Search = lazy(() => import('./components/Search'));

function App() {
  const [name, setName] = useState('');
  const [arraySearch, setArraySearch] = useState([]);
  const [pokemon, setPokemons] = useState([]);
  const [details, setDetails] = useState([]);
  const [offset, setOffset] = useState(40);
  const [limit, setLimint] = useState(100);
  const [types, setTypes] = useState([]);
  const [fil, setFil] = useState(details);

  console.log('fil', fil);

  useEffect(() => {
    try {
      const getMorPokemon = async () => {
        const data = await fetchPokemonAll(offset, limit);
        setPokemons(data.results);

        const createPokemonDetals = async pokemon => {
          pokemon.map(async pokemon => {
            const response = await fetch(pokemon.url);
            const data = await response.json();

            setDetails(prev => [...prev, data]);
          });
        };

        createPokemonDetals(data.results);
      };

      getMorPokemon();
    } catch (error) {
      console.log(error);
    }
  }, [limit, offset]);

  // -----------------NextPage---------------- //
  const nextPage = () => {
    setOffset(limit + offset);
  };

  // ---------------FilterTypesPokemon------------- //
  const filterType = type => {
    const allPokemon = [...details];

    console.log('allPokemon', allPokemon);

    let listType = allPokemon.filter(pokemon =>
      pokemon.types.some(som => som.type.name === type)
    );

    console.log(listType);

    if (listType.length === 0) {
      toast.info(`Not pokemon by types ${type}...`);
    } else {
      setFil(listType);
    }
  };

  // ---------------FetchTypesPokemon------------- //
  useEffect(() => {
    const getTypePokemon = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/type');
      const response = await data.json();
      setTypes(response.results);
    };

    getTypePokemon();
  }, []);

  // -----------------HandlerSearchName---------------- //
  const handlerSearchName = name => {
    setName(name);
  };

  // -----------------SearchByName---------------- //
  useEffect(() => {
    if (!name.trim()) return;

    if (name) {
      let filtePokemons = pokemons.filter(filterPokemonsByName(name));
      setArraySearch(filtePokemons);
    }
  }, [name]);

  return (
    <Container xs={12} sm={6} md={4}>
      <AppBar />
      <Search path="/" onChange={handlerSearchName} />
      <ListFilterType types={types} filterType={filterType} />
      <Suspense>
        <Routes>
          <Route
            path="/"
            exact="true"
            element={
              name.length >= 2 ? (
                <SearchListPokemon arraySearch={arraySearch} />
              ) : (
                <PokemonList nextPage={nextPage} details={details} />
              )
            }
          />
          <Route path="/type" element={<PokemonList fil={fil} />} />
          <Route path="/type/:name" element={<PokemonListId />} />
          <Route path="/:name" element={<PokemonListId />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer theme="colored" autoClose={2000} />
    </Container>
  );
}

export default App;
