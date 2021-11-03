import "../../button.css";
import "./style.css";

import Card from "../Card";

const Product = ({ products, handleClick }) => {
  return (
    <div className="card-slide__flex">
      {products.map(({ id, name, category, price, img }) => {
        return (
          <Card
            name={name}
            id={id}
            category={category}
            price={price}
            img={img}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Product;
