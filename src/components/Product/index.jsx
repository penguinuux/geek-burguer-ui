import "./style.css";
import "../../button.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Product = ({ products, handleClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="products">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default Product;
