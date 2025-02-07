import { useState } from "react";
import DropdownBtn from "./DropdownBtn";
import DropdownList from "./DropdownList";
import accountMenu from "@/data/account_menu";

function Dropdown() {
  const [dropdownState, setDropdownState] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const toggleDropdownState = () => {
    setDropdownState((prevState) => {
      return !prevState;
    });
  };

  const handleSetAccountMenuItem = (index) => {
    if (index !== activeMenuItem) {
      setActiveMenuItem(() => index);
    }
  };

  return (
    <div className="container">
      <DropdownBtn toggleDropdownList={toggleDropdownState} />
      <DropdownList active={activeMenuItem} data={accountMenu} open={dropdownState} setActiveMenu={handleSetAccountMenuItem}/>
    </div>
  );
}

export default Dropdown;
