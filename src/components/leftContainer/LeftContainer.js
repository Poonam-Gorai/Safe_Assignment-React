import "./LeftContainer.css";
import "./LeftContainerHeader.css";
import Button from "../button/Button";
import Group from "../../assets/Group_safe.png";
import Search from "../search/Search";

import CreateNewSafe from "./createNewSafe/CreateNewSafe";
import { useState } from "react";

function LeftContainer({
  setAddButtonDisable,
  setSelectedSafe,
  setcurrentIndex,
  setSafeListName,
}) {
  const [safeListLength, setsafeListLength] = useState({});
  setSafeListName(safeListLength);
  console.log(safeListLength);
  return (
    <div className="left-img-content">
      <div className="left-container">
        <header className="left-container-header">
          <span className="allsafe">All Safes ({safeListLength.length})</span>
          <Search />
        </header>
        <div className="safelist">
          <CreateNewSafe
            setAddButtonDisable={setAddButtonDisable}
            setSelectedSafe={setSelectedSafe}
            setcurrentIndex={setcurrentIndex}
            setsafeListLength={setsafeListLength}
          />
        </div>
        {safeListLength.length === 0 && 
        <img src={Group} className="Group" />}

        {safeListLength.length !== 0 && (
          <img src={Group} className="Group_none" />
        )}
      </div>
      <Button />
    </div>
  );
}

export default LeftContainer;
