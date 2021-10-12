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

  // const [safeLength, setsafeLength] = useState({});
  // setSafeListName(safeLength);
  // //console.log(safeLength);

  console.log(safeListLength);
  return (
    <div className="left-img-content">
      <header className="left-container-header">
        <span className="allsafe">All Safes ({safeListLength.length})</span>
        <Search />
      </header>
      <div className="left-container">
        <div className="safelist">
          <CreateNewSafe
            setAddButtonDisable={setAddButtonDisable}
            setSelectedSafe={setSelectedSafe}
            setcurrentIndex={setcurrentIndex}
            setsafeListLength={setsafeListLength}
          />
        </div>
        {safeListLength.length === 0 && (
          <>
            <img src={Group} className="Group" />
            <Button />
          </>
        )}

        {safeListLength.length !== 0 && (
          <>
            <img src={Group} className="Group_none" />
            <Button  />
          </>
        )}
      </div>
    </div>
  );
}

export default LeftContainer;
