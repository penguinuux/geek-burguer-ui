import "./style.css";

const Cart = ({ currentSale, removeItem }) => {
  return (
    <ul className="cart-list">
      {currentSale.map(({ id, name, category, img }, index) => {
        return (
          <li className="cart-list__item" key={index + id}>
            <div className="cart-list__picture">
              <img src={img} alt={name} />
            </div>
            <div className="cart-list__info">
              <h3 className="cart-list__name">{name}</h3>
              <p className="cart-list__category">{category}</p>
              <span
                className="cart-list__removeSpan"
                onClick={() => removeItem(index)}
              >
                Remover
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
