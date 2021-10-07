import "./CreateNewSafe.css";
import { useSelector } from "react-redux";
import React from "react";

function CreateNewSafe({ setAddButtonDisable, setSelectedSafe }) {
  const safeList = useSelector((state) => state.createSafe.safes);

  const handelClick = (safe) => {
    setSelectedSafe(safe);
    setAddButtonDisable((prevState) => !prevState);
  };

  return (
    <>
      {safeList.length > 0 &&
        safeList.map((safe, index) => {
          return (
            <div
              key={index}
              className="CreateNewSafe"
              onClick={() => {
                handelClick(safe);
              }}
            >
              {safe.safename}
            </div>
          );
        })}
    </>
  );
}

export default CreateNewSafe;
