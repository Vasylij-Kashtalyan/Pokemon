import { SearchPokemon } from 'components/SearchPokemon/SearchPokemon';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PokemonPage from 'components/PokemonPage/PokemonPage';

function App() {
  const [name, setName] = useState('');

  const handlerSubmit = name => {
    setName(name);
  };
  return (
    <Container>
      <AppBar />
      <Suspense>
        <Routes>
          <Route
            path="/"
            exact="true"
            element={<SearchPokemon onSubmit={handlerSubmit} />}
          />
          <Route path="/pokemon" element={<PokemonPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
