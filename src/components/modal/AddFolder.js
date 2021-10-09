import React from "react";

const AddFolder = ({ setshowAddFolder,name,handleSetName }) => {
  

  const closeAddForm = () => {
    setshowAddFolder((prev) => !prev);
  };
  const saveForm = () => {
    console.log(name);
    setshowAddFolder((prev) => !prev);
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
