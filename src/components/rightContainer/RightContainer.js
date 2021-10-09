import React from "react";
import "./RightContainer.css";
import AddFolder from "../modal/AddFolder";
import RightCard from './rightCard/rightCard';

function RightContainer({
 // AddButtonDisable,
 // setAddButtonDisable,
  selectedSafe,
  setSelectedSafe,
}) {
  const [showAddFolder, setshowAddFolder] = React.useState(false);
  const [name, setName] = React.useState("");

  

  const handleSetName = (add) => {
    setName(add);
  };
  const handelClick = () => {
    setshowAddFolder((prev) => !prev);
    //setAddButtonDisable((prevState) => !prevState);
  };
  return (
    <>
      {showAddFolder === true && (
        <AddFolder
          handleSetName={handleSetName}
          name={name}
          selectedSafe={selectedSafe}
          setSelectedSafe={setSelectedSafe}
          setshowAddFolder={setshowAddFolder}
        />
      )}
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
          <RightCard name={name}/>
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
              //enabled={AddButtonDisable}
              
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
