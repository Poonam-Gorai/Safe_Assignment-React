import React from "react";
import "./Modal.css";


const EditModel = (props) => {

    function cancleHandler(){
        props.onCancel();
    }

  return (
    <form className="modal">
      <p className="create">Create Safe</p>
      <div className="modal-img">
        <img src="./assets/icon.png" className="icon" alt="icon"></img>
        <p className="model-content">
          A Safe is a logical unit to store the secrets. All the safes are
          created within Vault. You can control access only at the safe level.
          As a vault administrator you can manage safes but cannot view the
          content of the safe.
        </p>
      </div>
      <div className="input-content">
        <span className="Safename" htmlFor="safename">
          Safe Name
        </span>
        <input
          type="text"
          placeholder="Safe Name"
          id="safename"
          className="Safe"
          autoComplete="off"
          required
        ></input>
        <span className="Safename" htmlFor="owner">
          Owner
        </span>
        <input
          type="text"
          placeholder="Owner"
          id="owner"
          className="Safe"
          autoComplete="off"
          required
        ></input>
        <span className="Safename" htmlFor="type">
          Type
        </span>
        <input
          type="text"
          placeholder="Type"
          id="type"
          className="Safe"
          autoComplete="off"
          required
        ></input>
        <span className="Safename" htmlFor="description">
          Description
        </span>
        <textarea
          placeholder="Description"
          id="description"
          className="Safe"
          rows="2"
          required
        ></textarea>
        <span className="Safename">Please add minimum of 10 characters</span>
      </div>
      <div className="modal-btn">
        <button className="modal-btn-cancle" onClick={cancleHandler} >Cancel</button>
        <button className="modal-btn-create"> Save</button>
      </div>
    </form>
  );
};

export default EditModel;
