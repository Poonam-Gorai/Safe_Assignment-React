import { useRef } from "react";//for reading the user input using reference
import "./Modal.css";

import { useSelector, useDispatch } from 'react-redux';
import {createSafe} from '../../redux/createSafe/createSafe.action';


function Modal(props) {

  
  const dispatch = useDispatch();

  //it is like a useState only and it preserve the value. No rerender
  const safeNameInputRef = useRef();
  const ownerInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();

    function cancleHandler(){
        props.onCancel();
    }

    let modalData;
    function submitHandler(event){

      event.preventDefault();//to prevent Default input 

      //it holds the currently added input //this is a javascript property
      const enteredSafeName = safeNameInputRef.current.value;
      const enteredOwner = ownerInputRef.current.value;
      const enteredType = typeInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const modalData = {
        safename: enteredSafeName,
        owner:  enteredOwner,
        type: enteredType,
        description: enteredDescription,
      };

      console.log(modalData);
    }
    dispatch({type:"SET_CREATE_SAFE", payload:modalData});
    console.log(dispatch);


  return (
    <div className="modal" >
      <p className="create">Create Safe</p>
      <div className="modal-img">
        <img src="./assets/icon.png" className="icon"></img>
        <p className="model-content">
          A Safe is a logical unit to store the secrets. All the safes are
          created within Vault. You can control access only at the safe level.
          As a vault administrator you can manage safes but cannot view the
          content of the safe.
        </p>
      </div>
      <div className='input-content'>
      <span className='Safename' htmlFor='safename'>Safe Name</span>
      <input type="text" placeholder="Safe Name" id='safename'className="Safe" ref={safeNameInputRef}></input>
      <span className='Safename' htmlFor='owner'>Owner</span>
      <input type="text" placeholder="Owner"id='owner' className="Safe" ref={ownerInputRef}></input>
      <span className='Safename'htmlFor='type'>Type</span>
      <input type="text" placeholder="Type" id='type'className="Safe" ref={typeInputRef}></input>
      <span className='Safename'htmlFor='description'>Description</span>
      <textarea placeholder="Description"id='description' className="Safe" rows='2' ref={descriptionInputRef}></textarea>
      <span className='Safename'>Please add minimum of 10 characters</span>
      </div>
      <div className='modal-btn'>
      <button className="modal-btn-cancle"onClick={cancleHandler} >Cancel</button>
      <button className="modal-btn-create"onClick={submitHandler} > + Create</button>
      </div>
    </div>
  );
}

export default Modal;
 