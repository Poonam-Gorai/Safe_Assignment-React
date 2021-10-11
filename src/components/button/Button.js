import { useState } from "react";
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
    <div className='btn-size'>
      
      <button className="btn" onClick={ModalHandler}>
        <span className="plus">+</span>
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
