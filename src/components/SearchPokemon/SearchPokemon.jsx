import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import s from './SearchPokemon.module.scss';

const SearchPokemon = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handlerNameChanche = evt => setName(evt.currentTarget.value);

  const handlerSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '') {
      alert('Введіть імя для пошуку...');
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handlerSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch className={s.ImSearch} />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          name="name"
          onChange={handlerNameChanche}
          value={name}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export { SearchPokemon };
