import PropTypes from "prop-types";
import CardItem from "@/components/CardItem"
import "@/assets/styles/card_view.css";

function CardsView({products}) {
  return (
    <div className="cards">
      <ul className="cards-list">
        {
          [...products].map((item, index) => {
            item.id = index;
            return (<li key={index}>
              <CardItem data={item} />
            </li>)
          })
        }
      </ul>
    </div>
  );
}

CardsView.propTypes = {
  products: PropTypes.array.isRequired,
}

export default CardsView;
