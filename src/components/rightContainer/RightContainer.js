import React from "react";
import "./RightContainer.css";
import { useState } from "react";
import AddFolder from "../modal/AddFolder";
import RightCard from "./rightCard/rightCard";
import { useSelector } from "react-redux";
import Backdrop from "../backdrop/Backdrop";

function RightContainer({
  AddButtonDisable,
  setAddButtonDisable,
  selectedSafe,
  setSelectedSafe,
  currentIndex,
}) {
  const [showAddFolder, setshowAddFolder] = useState(false);
  const [name, setName] = useState("");
  const safeList = useSelector((state) => state.createSafe.safes);

  let secrets;
  if (safeList.length === 0){
    secrets=[]
  }
  else{
  secrets = safeList[currentIndex].secrets;
  }
  function closeModalHandler() {
    setshowAddFolder(false);
  }
  
  const handleSetName = (add) => {
    setName(add);
  };
  const handelClick = () => {
    setshowAddFolder((prev) => !prev);
    setAddButtonDisable((prevState) => !prevState);
  };
  return (
    <>
      {showAddFolder === true && (
        <AddFolder
          currentIndex={currentIndex}
          handleSetName={handleSetName}
          name={name}
          selectedSafe={selectedSafe}
          setSelectedSafe={setSelectedSafe}
          setshowAddFolder={setshowAddFolder}
        />
      )}
      {showAddFolder && <Backdrop onClick={closeModalHandler} />}
      <div className="right-container">
        <div className="image-container">
          <div className="safe-Content">
            <span className="Sample">Sample / SafeName</span>
            <p className="content">
              A Safe is a logical unit to store the secrets. All the safes are
              created within Vault. You can control access only at the safe
              level. As a vault administrator you can manage safes but cannot
              view the content of the safe.
            </p>
          </div>
        </div>
        <div className="secret-content">
          <ul className="secrets">
            <li>Secrets</li>
            <li> Add Folder</li>
          </ul>
          <div className="line"></div>
          {/* <div className="right-card">{name}</div> */}
          {secrets.map((secret, index) => {
            return (
            <RightCard name={secret} key={index} />
            );
          })}
          <div className="img-content">
            <img
              src="./assets/Group.png"
              alt="an group"
              className="image2"
            ></img>
            <p className="right-content">
              You
              <span className="text-style-2"> do </span>
              not have acess to this
              <span className="text-style-2"> Safe </span>
              and cannot view it’s contents
            </p>
            <button 
              disabled={AddButtonDisable}
              onClick={() => handelClick()}
              className="addButton"
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightContainer;
