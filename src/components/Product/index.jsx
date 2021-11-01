import "./style.css";

const Product = ({ products, handleClick }) => {
  return (
    <ul>
      {products.map(({ id, name, category, price, img }) => {
        return (
          <li key={id}>
            <div>
              <img src={img} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{category}</p>
            <span>{price.toFixed(2)}</span>
            <button onClick={() => handleClick(id)}>Adicionar</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Product;
