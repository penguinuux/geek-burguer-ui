import { useState } from "react";

import "./mediaQueries.css";
import "./App.css";
import "./reset.css";
import "./standardColors.css";

import MenuContainer from "./components/MenuContainer";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Supremo Kenzie",
      category: "Sanduíches",
      price: 24.99,
      img: "https://i.ibb.co/C13RDt7/61268-hamburger-mcdonald-s-cheeseburger-pounder-baconator-quarter-patty-thumb.png",
    },
    {
      id: 2,
      name: "Cheddar Burguer",
      category: "Sanduíches",
      price: 13.99,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 3,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 15.99,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 14.99,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 5,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    // {
    //   id: 6,
    //   name: "Fanta Laranja",
    //   category: "Bebidas",
    //   price: 4.99,
    //   img: "https://i.ibb.co/ZzzNyYy/fanta-laranja.png",
    // },
    {
      id: 7,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 8,
      name: "Shake OvoMaltine",
      category: "Bebidas",
      price: 5.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
    {
      id: 9,
      name: "Triple Burguer",
      category: "Sanduíches",
      price: 17.99,
      img: "https://i.ibb.co/hHpCmGt/77381-king-whopper-hamburger-big-veggie-burger-thumb.png",
    },
    {
      id: 10,
      name: "Burguer Combo",
      category: "Sanduíches",
      price: 18.99,
      img: "https://i.ibb.co/KzxjZWk/74861-king-hamburger-food-ribs-fries-fast-burger-thumb.png",
    },
    {
      id: 11,
      name: "Classic Burguer",
      category: "Sanduíches",
      price: 7.99,
      img: "https://i.ibb.co/Sd91CJp/70545-king-hamburger-food-mcdonald-s-cheeseburger-fast-burger-thumb.png",
    },
    {
      id: 12,
      name: "Wrap",
      category: "Sanduíches",
      price: 8.99,
      img: "https://i.ibb.co/N9XYnFC/77553-king-whopper-sandwich-hamburger-burger-wrap-barbecue-thumb.png",
    },
    // {
    //   id: 13,
    //   name: "Onion Ring",
    //   category: "Fritas",
    //   price: 10.99,
    //   img: "https://i.ibb.co/PjpqW1M/onion.png",
    // },
    {
      id: 14,
      name: "Batata Frita",
      category: "Fritas",
      price: 5.99,
      img: "https://i.ibb.co/wQ0xmnW/batata-frita.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [userSearch, setUserSearch] = useState("");

  const handleClick = (productId) => {
    if (currentSale.find((element) => element.id === productId) === undefined) {
      const selectedProduct = products.filter(({ id }) => id === productId);
      setCurrentSale([...currentSale, ...selectedProduct]);
    }
  };

  const removeItem = (indexToRemove) => {
    const filteredCart = currentSale.filter(
      (item, index) => index !== indexToRemove
    );
    setCurrentSale(filteredCart);
  };

  const clearCart = () => {
    setCurrentSale([]);
  };

  const total = (
    <p className="cart-display__total">
      Total{" "}
      <span className="cart-display__total-number">
        <span>R$ </span>
        {currentSale
          .reduce((acc, { price }) => {
            return acc + price;
          }, 0)
          .toFixed(2)}
      </span>
    </p>
  );

  return (
    <div className="App">
      <div className="App-header">
        <header className="App-header__header">
          <h1 className="App-header__title">Geek</h1>
        </header>
        <SearchBar
          list={products}
          setFilteredProducts={setFilteredProducts}
          setIsSearched={setIsSearched}
          setUserSearch={setUserSearch}
        />
      </div>
      <main>
        <section className="menu-display">
          {isSearched === false ? (
            <MenuContainer list={products} handleClick={handleClick} />
          ) : (
            <>
              <h2 className="menu-display__search-message">
                Resultados para:
                <span className="menu-display__text"> "{userSearch}"</span>
              </h2>
              <MenuContainer
                list={filteredProducts}
                handleClick={handleClick}
              />
            </>
          )}
        </section>
        <section className="cart-display">
          <h2 className="cart-display__title">Carrinho de compras</h2>
          {currentSale.length === 0 ? (
            <div className="cart-display__products">
              <h3 className="cart-display__message-title">
                Sua sacola está vazia
              </h3>
              <span className="cart-display__message-paragraph">
                Adicione itens
              </span>
            </div>
          ) : (
            <div className="cart-display__products">
              <Cart currentSale={currentSale} removeItem={removeItem} />
              {total}
              <button
                className="cart-display__remove-button"
                onClick={clearCart}
              >
                Remover todos
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
