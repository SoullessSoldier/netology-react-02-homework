import PropTypes from "prop-types";
import { useState } from "react";
import IconSwitch from "./IconSwitch";
import DataView from "./DataView";

function Store({ data, icons }) {
  const [layout, setLayout] = useState(icons[0].name);

  const toggleLayout = (activeLayout) => {
    console.log("activeLayout", activeLayout);
    if (activeLayout !== layout) {
      setLayout(() => activeLayout);
    }
  };

  return (
    <>
      <IconSwitch icon={layout} data={icons} onSwitch={toggleLayout} />
      <DataView mode={layout} data={data} />
    </>
  );
}

Store.propTypes = {
  data: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
};

export default Store;
