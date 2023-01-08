import s from './Search.module.scss';
import { useState } from 'react';

function Search({ onChange }) {
  const [name, setName] = useState('');

  const handlerChange = evt => {
    setName(evt.target.value.replace(/[^a-z\d]/gi, ''));
  };

  onChange(name);

  return (
    <div className={s.box}>
      <label className={s.box_label}>
        Search:
        <input
          className={s.box_input}
          name="name"
          onChange={handlerChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Name Pokemon"
        />
      </label>
    </div>
  );
}
export default Search;
