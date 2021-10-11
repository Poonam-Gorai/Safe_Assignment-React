import React from "react";
import './AddFolder.css';
import { useSelector } from "react-redux";

const AddFolder = ({ setshowAddFolder,name,handleSetName,currentIndex }) => {

  const safeList = useSelector((state) => state.createSafe.safes);
  const secrets = safeList[currentIndex].secrets;
  //console.log("StfeList",safeList[0].secrets);


  const closeAddForm = () => {
    setshowAddFolder((prev) => !prev);
    
  };
  const saveForm = () => {
    console.log("str",name);
    setshowAddFolder((prev) => !prev);
    secrets.push(name)
    handleSetName(" ");
  };

  return (
    <div className="addFolder">
      <div className="addFolder-content">
        <span className="Safename" htmlFor="safename">
          Add Folder
        </span>
        <input
          type="text"
          placeholder=""
          id="safename"
          className="Safe"
          value={name}
          onChange={(e) => handleSetName(e.target.value)}
        ></input>
        <div className="addFolder-btn">
          <button className="addFolder-btn-cancle" onClick={closeAddForm}>
            Cancel
          </button>
          <button className="addFolder-btn-create" onClick={saveForm}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFolder;
