import React from "react";

import './rightCard.css';

function RightCard(props){

    return(
        <div className='right-card'>
            {/* <img src='../../assets/icon.png' className='folder'></img> */}
            <span className='right-card-details'>{props.name}</span>
        </div>
    )
}

export default RightCard;