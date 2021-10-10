
import { useSelector,useDispatch } from "react-redux";
import React from "react";
import Card from "./card";
import {deleteItem} from '../../../redux/createSafe/createSafe.action';


function CreateNewSafe({ setSelectedSafe, setcurrentIndex,setAddButtonDisable}) {
  const safeList = useSelector((state) => state.createSafe.safes);
  
  console.log(safeList);
  const dispatch = useDispatch();

  const handelClick = (safe, index) => {
    setcurrentIndex(index)
    setSelectedSafe(safe);
    setAddButtonDisable((prevState) => !prevState);
  };
 const onDelete = (index) => {
  dispatch(deleteItem(index));
 }
  return (
    <>
      {safeList.length > 0 &&
        safeList.map((safe, index) => {
          return (
            <Card
              key={index}
              handelClick={handelClick}
              safe={safe}
              index={index}
              onDelete={onDelete}
              />
          );
        })}
    </>
  );
}

export default CreateNewSafe;
