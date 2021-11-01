import { useState } from "react";

import "./App.css";
import "./reset.css";
import "./standardColors.css";

import MenuContainer from "./components/MenuContainer";
import Product from "./components/Product";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([
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
    {
      id: 6,
      name: "Fanta Laranja",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/ZzzNyYy/fanta-laranja.png",
    },
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
      name: "Triple burguer",
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
    {
      id: 13,
      name: "Onion Ring",
      category: "Fritas",
      price: 10.99,
      img: "https://i.ibb.co/PjpqW1M/onion.png",
    },
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

  const showProducts = (list) => {
    return <Product products={list} handleClick={handleClick} />;
  };

  const handleClick = (productId) => {
    const selectedProduct = products.filter(({ id }) => id === productId);
    setCurrentSale([...currentSale, ...selectedProduct]);
  };

  const removeItem = (idToRemove) => {
    const filteredCart = currentSale.filter(({ id }) => id !== idToRemove);
    setCurrentSale(filteredCart);
  };

  const clearCart = () => {
    setCurrentSale([]);
  };

  const total = (
    <div>
      <h3>
        Total:{" "}
        <span>
          {currentSale
            .reduce((acc, { price }) => {
              return acc + price;
            }, 0)
            .toFixed(2)}
        </span>
      </h3>
    </div>
  );

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <header>
            <h1>Geek Burguer</h1>
          </header>
          <SearchBar
            list={products}
            setFilteredProducts={setFilteredProducts}
            setIsSearched={setIsSearched}
          />
        </div>
        <main>
          <section>
            {isSearched === false ? (
              <MenuContainer list={products} showProducts={showProducts} />
            ) : (
              <MenuContainer
                list={filteredProducts}
                showProducts={showProducts}
              />
            )}
          </section>
          <section>
            <h2>Carrinho de compras</h2>
            {currentSale.length === 0 ? (
              <div>
                <h3>Sua sacola está vazia</h3>
                <span>Adicione itens</span>
              </div>
            ) : (
              <div>
                <Cart currentSale={currentSale} removeItem={removeItem} />
                {total}
                <button onClick={clearCart}>Remover todos</button>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
