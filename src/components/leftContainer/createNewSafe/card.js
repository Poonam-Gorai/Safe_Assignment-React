import React from "react";
import './card.css'

function Card(props){
const {safe,handelClick ,onDelete,index} = props;
//console.log(safe.index);

    return(
        <div className='card ' onClick={() => {handelClick(safe);}}>
<div className='img-cont'>
            <img src='../../../assets/icon.png' className='icon'></img>
            <span className='card-details'>{safe.safename}</span>
            </div>
            <div className='rightcard'>
            <img src='../../../assets/delete.png' onClick={() => onDelete(index)} className='icon'></img>
            </div>
        </div>
    )
}
export default Card;