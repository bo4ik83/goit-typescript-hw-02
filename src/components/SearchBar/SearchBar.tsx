import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

// Типизация пропсов
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
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

export default SearchBar;
