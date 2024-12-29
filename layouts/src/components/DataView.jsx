import ListView from "./ListView";
import CardsView from "./CardsView";
import PropTypes from "prop-types";

function DataView({mode, data}) {
    if (mode === "list") {
        return <ListView products={data}/>;
      }
      return <CardsView products={data} />;
}

DataView.propTypes = {
    mode: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default DataView;