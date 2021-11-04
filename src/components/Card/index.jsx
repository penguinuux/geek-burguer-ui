import "./style.css";

const Card = ({ id, name, category, price, img, handleClick }) => {
  return (
    <div className="products__item">
      <div className="products__picture">
        <img src={img} alt={name} />
      </div>
      <div className="products__info">
        <h3 className="products__name">{name}</h3>
        <p className="products__category">{category}</p>
        <span className="products__price">R$ {price.toFixed(2)}</span>
        <button className="button--medium" onClick={() => handleClick(id)}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Card;
