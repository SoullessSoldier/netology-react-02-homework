import PropTypes from "prop-types";

function DropdownBtn({toggleDropdownList}) {
  const handleClick = () => {
    toggleDropdownList()
  }
  return (
    <button className="btn" onClick={handleClick}>
      Account settings
      <img className="material-icons" src="/icons/public_48dp.svg" style={{ width: "24px", height: "24px" }}/>
    </button>
  )
}

DropdownBtn.propTypes = {
  toggleDropdownList: PropTypes.func.isRequired,
};

export default DropdownBtn;
