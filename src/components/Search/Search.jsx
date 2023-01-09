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
      <input
        className={s.box_input}
        name="name"
        onChange={handlerChange}
        type="text"
        autoComplete="off"
        placeholder="Search pokemon"
      />
    </div>
  );
}
export default Search;
