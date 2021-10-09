import React from "react";
import { useSelector } from "react-redux";

const AddFolder = ({ setshowAddFolder,name,handleSetName }) => {

  const safeList = useSelector((state) => state.createSafe.safes);
  const secrets = safeList[0].secrets;
  //console.log("StfeList",safeList[0].secrets);


  const closeAddForm = () => {
    setshowAddFolder((prev) => !prev);
    //handleSetName(" ");
  };
  const saveForm = () => {
    console.log("str",name);
    setshowAddFolder((prev) => !prev);
    secrets.push(name)
    handleSetName(" ");
  };

  return (
    <div className="modal">
      <div className="input-content">
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
        <div className="modal-btn">
          <button className="modal-btn-cancle" onClick={closeAddForm}>
            Cancel
          </button>
          <button className="modal-btn-create" onClick={saveForm}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFolder;
