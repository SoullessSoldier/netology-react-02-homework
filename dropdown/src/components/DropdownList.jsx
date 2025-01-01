import PropTypes from "prop-types";

function DropdownList({ open, data, setActiveMenu, active}) {

  const handleAccountMenuClick = (event) => setActiveMenu(event)
  

  for (let i = 0; i++; i < data.length) {
    data[i].id = i;
  }

  if (open) {
    return (
      <div className={`dropdown-wrapper ${open ? "open" : ""}`}>
        <ul data-id="dropdown" className="dropdown">
          {[...data].map((menuItem, index) => (
            <li
              key={index}
              data-menu-id={index}
              className={`dropdown-item ${
                index === active ? "active" : ""
              }`}
              onClick={handleAccountMenuClick}
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
