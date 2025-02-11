import { useState } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={s.header}>
      <header className={s.searchBar}>
        <Toaster position="top-right" reverseOrder={false} />
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className={s.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
