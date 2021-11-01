import "./style.css";
import "../../button.css";

const Product = ({ products, handleClick }) => {
  return (
    <div className="products">
      {products.map(({ id, name, category, price, img }) => {
        return (
          <div className="products__item" key={id}>
            <div className="products__picture">
              <img src={img} alt={name} />
            </div>
            <div className="products__info">
              <h3 className="products__name">{name}</h3>
              <p className="products__category">{category}</p>
              <span className="products__price">{price.toFixed(2)}</span>
              <button
                className="button--medium"
                onClick={() => handleClick(id)}
              >
                Adicionar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
