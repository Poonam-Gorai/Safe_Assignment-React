import "./LeftContainer.css";
import "./LeftContainerHeader.css";
import Button from "../button/Button";
import Group from "../../assets/Group_safe.png";
import "../search/Search.css";

import CreateNewSafe from "./createNewSafe/CreateNewSafe";
import { useSelector } from "react-redux";
import { useState,useRef } from "react";

function LeftContainer({
  setAddButtonDisable,
  setSelectedSafe,
  setcurrentIndex,
  setSafeListName,
}) {
  const safeList = useSelector((state) => state.createSafe.safes);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef("");
  const [newSafeList, setNewSafeList] = useState([]);
  const [safeListLength, setsafeListLength] = useState({});
  setSafeListName(safeListLength);

  const safeSearch = safeList;
  console.log(safeSearch);
  
  // const [safeLength, setsafeLength] = useState({});
  // setSafeListName(safeLength);
  // //console.log(safeLength);

  const filterSafe = () => {
    const searchText = inputRef?.current.value;
    console.log(searchText)
    setSearchTerm(searchText);
    if (searchText !== "") {
      const newAllSafes = safeSearch.filter((item) => {
        return item.safename.toLowerCase().includes(searchText.toLowerCase());
      });
      setNewSafeList(newAllSafes);
      console.log(newAllSafes)
    } else {
      return safeSearch;
    }
  }

  console.log(safeListLength);
  return (
    <div className="left-img-content">
      <header className="left-container-header">
        <span className="allsafe">All Safes ({safeListLength.length})</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="&nbsp;Search.."
          className="search"
          value={searchTerm}
          onChange={filterSafe}
        />
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
            <img src={Group} className="Group" alt="groupimg" />
            <Button />
          </>
        )}

        {safeListLength.length !== 0 && (
          <>
            <img src={Group} className="Group_none" alt="groupimg" />
            <Button />
          </>
        )}
      </div>
    </div>
  );
}

export default LeftContainer;
