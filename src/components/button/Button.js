import { useState } from "react";
//use history hook will help the page to go back. 
import { useHistory } from "react-router-dom";
import Backdrop from '../backdrop/Backdrop';
import Modal from '../modal/Modal';
import "./Button.css";

function Button() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function ModalHandler() {
    setModalIsOpen(true);

    //console.log('Clicked');
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }


  return (
    <div>
      <button className="btn" onClick={ModalHandler}>
        <a className="plus">+</a>
      </button>
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Button;
