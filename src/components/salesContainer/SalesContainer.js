import React from "react";
import LeftContainer from "../leftContainer/LeftContainer";
import RightContainer from "../rightContainer/RightContainer";
import "./SalesContainer.css";
import { useState } from "react";


function SalesContainer() {
  const [AddButtonDisable, setAddButtonDisable] = useState(true);
  const [selectedSafe, setSelectedSafe] = useState({});
  const [currentIndex, setcurrentIndex] = useState(0)

  // const safeList = useSelector((state) => state.createSafe.safes);
  // console.log("StfeList",safeList[0].secrets);

  return (
    <div className="main-content">
      <div className="container">
        <LeftContainer
          setAddButtonDisable={setAddButtonDisable}
          setSelectedSafe={setSelectedSafe}
          setcurrentIndex={setcurrentIndex}
        />
        <RightContainer
          AddButtonDisable={AddButtonDisable}
          setAddButtonDisable={setAddButtonDisable}
          selectedSafe={selectedSafe}
          setSelectedSafe={setSelectedSafe}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
}

export default SalesContainer;
