const Cart = ({ currentSale, removeItem }) => {
  return (
    <div>
      <ul>
        {currentSale.map(({ id, name, category, img }) => {
          return (
            <li key={"cart-" + id}>
              <div>
                <img src={img} alt={name} />
              </div>
              <h3>{name}</h3>
              <p>{category}</p>
              <span onClick={() => removeItem(id)}>Remover</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
