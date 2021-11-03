import Product from "../Product";

const MenuContainer = ({ list, handleClick }) => {
  return <Product products={list} handleClick={handleClick} />;
};

export default MenuContainer;
