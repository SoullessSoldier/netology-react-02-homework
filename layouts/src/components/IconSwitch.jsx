import PropTypes from "prop-types";
import "@/assets/styles/iconswitch.css";

function IconSwitch({ icon, data, onSwitch }) {
  const handleIconSwitch = (event) => {
    const buttonName = event.target.dataset.iconName;
    onSwitch(buttonName);
  };

  return (
    <div className="iconswitch">
      <ul className="iconswitch-list">
        {[...data].map((iconItem, index) => (
          <li key={index} className="iconswitch-item">
            <button
              className={`iconswitch-item-btn ${
                iconItem.name === icon ? "iconswitch-item-btn-active" : ""
              }`}              
              onClick={handleIconSwitch}
            >
              <img
                src={iconItem.src}
                alt={iconItem.name}
                data-icon-name={iconItem.name}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
