import "./CreateNewSafe.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";

function CreateNewSafe() {
  const safeList = useSelector((state) => state.createSafe.safes);
  console.log("state", safeList);

  //const [safeList, setSafeList] = useState([...state]);
  //console.log(safeList);

  const renderSafes = (item) => {
    return (
        <div>{item.safename}</div>
        
    )
  }

  return <div className="CreateNewSafe">
      {/* {safeList.length && (
        <div>{" "}</div>
      )} */}
      {safeList.length > 0 && safeList.map(renderSafes)}
  </div>
}

export default CreateNewSafe;
