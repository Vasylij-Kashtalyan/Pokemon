import { useState, useEffect } from 'react';
import { Container, ImageList, ImageListItem } from '@mui/material';
import { Pagination } from 'components/Pagination';
import { ListPok } from 'components/ListPok';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loadPokemon] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=150&offset=20'
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const res = await fetch(loadPokemon);
        const data = await res.json();

        function createPokemonObject(results) {
          results.forEach(async pokemon => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const data = await res.json();
            setPokemons(list => [...list, data]);
          });
        }
        createPokemonObject(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokemons();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container maxWidth="md">
      <ImageList variant="masonry" cols={3} gap={8}>
        <ImageListItem>
          <ListPok pokemons={currentPosts} />
        </ImageListItem>
      </ImageList>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={pokemons.length}
        paginate={paginate}
      />
    </Container>
  );
}

export { PokemonList };
