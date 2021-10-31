import { useState } from "react";

const SearchBar = ({ list, setFilteredProducts, setIsSearched }) => {
  const [inputValue, setInputValue] = useState("");
  if (inputValue.length === 0) setIsSearched(false);

  const searchProduct = () => {
    inputValue.length > 0 && setIsSearched(true);
    const filter = list.filter(({ category }) => category === inputValue);
    setFilteredProducts(list.filter(({ category }) => category === inputValue));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={searchProduct}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;
