import { useState } from "react";

import "./style.css";

const SearchBar = ({
  list,
  setFilteredProducts,
  setIsSearched,
  setUserSearch,
}) => {
  const [inputValue, setInputValue] = useState("");
  if (inputValue.length === 0) setIsSearched(false);

  const searchProduct = () => {
    inputValue.length > 0 && setIsSearched(true);
    setFilteredProducts(
      list.filter(({ name, category }) => {
        return (
          name.toLowerCase().includes(inputValue.toLowerCase()) ||
          category.toLowerCase().includes(inputValue.toLowerCase())
        );
      })
    );
  };

  setUserSearch(inputValue);

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        placeholder="Pesquisar"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="search-bar__button button--medium"
        onClick={searchProduct}
      >
        Pesquisar
      </button>
    </div>
  );
};

export default SearchBar;
