import PropTypes from "prop-types";
import "@/assets/styles/card.css";

function CardItem({ data }) {
  const { id, name, price, color, img } = data;

  return (
    <div className="card" style={{backgroundImage: `url(${img})`}}>
      <div className="card-header">
        <h5 className="card-title">{name}</h5>
        <div className="card-color">{color}</div>
      </div>
      <div className="card-footer">
        <div className="card-price">${price}</div>
        <button className="card-order-btn" data-id={id}>ADD TO CART</button>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default CardItem;
