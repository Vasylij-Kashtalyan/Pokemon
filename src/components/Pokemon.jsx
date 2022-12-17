import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ImageList, ImageListItem } from '@mui/material';

const Pokemon = ({ pokemon }) => {
  return (
    <Container>
      <Link to={pokemon.name}>
        <ImageList variant="masonry" cols={3} gap={8}>
          <ImageListItem>
            <img
              src={`${pokemon.sprites['front_default']}?w=248&fit=crop&auto=format`}
              alt={pokemon.name}
              loading="lazy"
            />
            <h5 className="card-title">{pokemon.name}</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Type: {pokemon.types[0].type.name}
              </li>
            </ul>
          </ImageListItem>
        </ImageList>
      </Link>
    </Container>
  );
};

export { Pokemon };
