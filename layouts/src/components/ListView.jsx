import PropTypes from "prop-types";
import ListItem from "@/components/ListItem";
import "@/assets/styles/list_view.css";

function ListView({products}) {
  return (
    <div className="products">
      <ul className="products-list">
        {products.map((item, index) => {
          item.id = index;
          return (
            <li className="products-list-item" key={index}>
              <ListItem data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ListView.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ListView;
