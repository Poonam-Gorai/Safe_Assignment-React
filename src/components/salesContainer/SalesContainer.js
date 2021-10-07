import React from "react";
import LeftContainer from "../leftContainer/LeftContainer";
import RightContainer from "../rightContainer/RightContainer";
import "./SalesContainer.css";

function SalesContainer() {
  const [AddButtonDisable, setAddButtonDisable] = React.useState(true);
  const [selectedSafe, setSelectedSafe] = React.useState({});

  return (
    <div className="main-content">
      <div className="container">
        <LeftContainer
          setAddButtonDisable={setAddButtonDisable}
          setSelectedSafe={setSelectedSafe}
        />
        <RightContainer
          AddButtonDisable={AddButtonDisable}
          setAddButtonDisable={setAddButtonDisable}
          selectedSafe={selectedSafe}
          setSelectedSafe={setSelectedSafe}
        />
      </div>
    </div>
  );
}

export default SalesContainer;
