import { Container } from '@mui/material';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppBar = lazy(() => import('./components/AppBar/AppBar'));
const PokemonList = lazy(() => import('./components/PokemonList'));
const PokemonListId = lazy(() => import('./components/PokemonListId'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

function App() {
  return (
    <Container xs={12} sm={6} md={4}>
      <AppBar />

      <Suspense>
        <Routes>
          <Route path="/" exact="true" element={<PokemonList />} />
          <Route path="/:name" element={<PokemonListId />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
