import PropTypes from "prop-types";

function DropdownList({ open, data, setActiveMenu, active}) {

  const handleAccountMenuClick = (index) => setActiveMenu(index)
  
  if (open) {
    return (
      <div className={`dropdown-wrapper ${open ? "open" : ""}`}>
        <ul className="dropdown">
          {data.map((menuItem, index) => (
            <li
              key={index}
              className={`dropdown-item ${
                index === active ? "active" : ""
              }`}
              onClick={() => handleAccountMenuClick(index)}
            >
              <a href={menuItem.route}>{menuItem.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

DropdownList.propTypes = {
  open: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  setActiveMenu: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

export default DropdownList;
