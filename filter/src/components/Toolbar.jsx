import PropTypes from "prop-types";

function Toolbar({ filters, selected, onSelectFilter }) {
  const handleFilterChange = (event) => {
    const buttonId = event.target.dataset.id;
    onSelectFilter(buttonId); 
  }
  return (
    <div className="toolbar">
      {[...filters].map((filterItem, index) => (
        <button
          key={index}
          data-id={index}
          className={`toolbar-btn ${
            index === selected ? "toolbar-btn-active" : ""
          }`}
          onClick={handleFilterChange}
        >
          {filterItem}
        </button>
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
