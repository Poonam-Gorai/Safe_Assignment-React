import React from "react";
import "./card.css";
import Backdrop from '../../backdrop/Backdrop';
import EditModel from "../../modal/EditModel";
import deleteImage from "../../../assets/delete.png";
import editImage from "../../../assets/edit.png";
import { useDispatch } from "react-redux";
import { editItem } from "../../../redux/createSafe/createSafe.action";


function Card(props) {
  const { safe, handelClick, onDelete, index } = props;
  //console.log(safe.index);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const dispatch = useDispatch();


  const handelEdit = () => {
    // dispatch(editItem(safe, index))
    setModalIsOpen(true);
    console.log("edit");
  };
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div
      className="card "
      onClick={() => {
        handelClick(safe, index);
      }}
    >
      <div className="img-cont">
        <img src="../../../assets/icon.png"alt={"img"} className="icon"></img>
        <span className="card-details">{safe.safename}</span>
      </div>
      <div className="rightcard">
      <img
          src={editImage}
          onClick={handelEdit}
          className="icon"
          alt={"img"}
        ></img>
        <img
          src={deleteImage}
          onClick={() => onDelete(index)}
          className="icon"
          alt={"img"}
        ></img>
      </div>
      {modalIsOpen && (
        <EditModel
          onCancel={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    
    </div>
  );
}
export default Card;
