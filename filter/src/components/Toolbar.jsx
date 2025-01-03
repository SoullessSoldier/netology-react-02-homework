import PropTypes from "prop-types";

function Toolbar({ filters, selected, onSelectFilter }) {
  const handleFilterChange = (index) => onSelectFilter(index);
  return (
    <div className="toolbar">
      {filters.map((filterItem, index) => (
        <button
          key={index}
          className={`toolbar-btn ${
            index === selected ? "toolbar-btn-active" : ""
          }`}
          onClick={() => handleFilterChange(index)}
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
