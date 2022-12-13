import { useState } from "react";
import { fetchCard } from "../services/API";
import s from "./Search.module.css";

function Search() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const handlerChan = (e) => setName(e.currentTarget.value);

  const handlerSubmit = (evt) => {
    evt.preventDefault();

    fetchCard(name, page);
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handlerSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          name="name"
          onChange={handlerChan}
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
}
export { Search };
