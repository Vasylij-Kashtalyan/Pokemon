import s from './SearchPokemon.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import { PokemonPage } from 'components/PokemonPage/PokemonPage';
import { StartImg } from 'components/StartImg/StartImg';
import { fetchPokemon } from 'api/API';

const SearchPokemon = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    if (!name) {
      return;
    }
    fetchPokemon(name)
      .then(pokemon => {
        setPokemon(pokemon);
      })
      .catch(error => error.message);
  }, [name]);

  const handlerNameChanche = evt =>
    setName(evt.currentTarget.value.replace(/[^a-z\d]/gi, '').toLowerCase());

  const handlerSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '') {
      toast.error('Введіть імя свого покемона...');
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handlerSubmit}>
          <input
            name="name"
            onChange={handlerNameChanche}
            value={name}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Se your pokemons"
          />
          <button type="submit" className={s.SearchFormButton}>
            <ImSearch className={s.ImSearch} />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
      {pokemon ? <PokemonPage pokemon={pokemon} /> : <StartImg />}
      <ToastContainer />
    </>
  );
};

export { SearchPokemon };
