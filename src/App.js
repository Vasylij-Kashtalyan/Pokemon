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
import { useDispatch, useSelector } from 'react-redux';
import { setOffset } from 'redux/offsetSlice';
import { setArraySearch } from 'redux/arraySearchSlice';

const ListFilterType = lazy(() => import('./components/ListFilterType'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const PokemonList = lazy(() => import('./components/PokemonList'));
const AppBar = lazy(() => import('./components/AppBar/AppBar'));
const SearchListPokemon = lazy(() =>
  import('./components/SearchListPokemon/SearchListPokemon')
);
const Search = lazy(() => import('./components/Search'));
const LOCALSTORAGE_KEY_TYPE = 'typePokemons';

function App() {
  // const [arraySearch, setArraySearch] = useState([]);
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState([]);
  const [name, setName] = useState('');
  const [, setPokemons] = useState([]);
  const [fil, setFil] = useState(details);

  const offset = useSelector(state => state.offset.value);
  const limit = useSelector(state => state.limit.value);
  const dispatch = useDispatch();

  // ---------------FetchAllPokemon------------- //
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
    dispatch(setOffset(offset + limit));
  };

  // ---------------FilterTypesPokemon------------- //
  const filterType = type => {
    const allPokemon = [...details];
    let listType = allPokemon.filter(pokemon =>
      pokemon.types.some(som => som.type.name === type)
    );

    if (listType.length === 0) {
      toast.info(`Not pokemon by types ${type}...`);
    } else {
      setFil(listType);

      localStorage.setItem(LOCALSTORAGE_KEY_TYPE, JSON.stringify(listType));
    }
  };

  // ---------------LocalStorageGetTypesPokemon------------- //
  useEffect(() => {
    let getPokemonType = localStorage.getItem(LOCALSTORAGE_KEY_TYPE);
    getPokemonType = JSON.parse(getPokemonType);

    if (getPokemonType) setFil(getPokemonType);
  }, []);

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
      dispatch(setArraySearch(filtePokemons));
    }
  }, [name]);

  return (
    <Container>
      <AppBar />

      <Search onChange={handlerSearchName} />

      <ListFilterType types={types} filterType={filterType} />

      <Suspense>
        <Routes>
          <Route
            path="/"
            exact="true"
            element={
              name.length >= 2 ? (
                <SearchListPokemon />
              ) : (
                <PokemonList nextPage={nextPage} details={details} />
              )
            }
          />
          <Route
            path="/type"
            element={
              name.length >= 2 ? (
                <SearchListPokemon />
              ) : (
                <PokemonList fil={fil} />
              )
            }
          />

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
