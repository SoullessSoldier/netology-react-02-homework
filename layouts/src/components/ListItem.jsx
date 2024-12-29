import PropTypes from "prop-types";
import "@/assets/styles/list_item.css";
import "@/assets/styles/card.css";

function ListItem({ data }) {
  const { id, name, price, color, img } = data;
  return (
    <div className="listitem-card">
      <div className="listitem-card-header">
        <img className="listitem-card-img" src={img} alt="Product image" />
        <h5 className="card-title">{name}</h5>
        <div className="card-color">{color}</div>
      </div>
      <div className="listitem-card-footer">
        <div className="card-price">${price}</div>
        <button className="card-order-btn" data-id={id}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default ListItem;
