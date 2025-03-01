/* eslint-disable react/prop-types */
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSubmit }) => {
  const notify = () =>
    toast.error("Please enter search term!", {
      duration: 3000,
      position: "top-right",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let searchQuery = form.elements.search.value.trim().toLowerCase();
    if (searchQuery.length < 2) {
      notify();
      return;
    }
    onSubmit(searchQuery);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <IoSearch />
        </button>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;