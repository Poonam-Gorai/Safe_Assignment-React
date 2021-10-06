import React from "react";
import Image from "../image/Image";
import "./RightContainer.css";

function RightContainer() {
  return (
    <div className="right-container">
      <Image />
      {/*<span className="Sample">Sample / SafeName</span>
      <p className="content">
        A Safe is a logical unit to store the secrets. All the safes are created
        within Vault. You can control access only at the safe level. As a vault
        administrator you can manage safes but cannot view the content of the
        safe.
      </p>*/}
      <div className='secret-content'>
      <ul className="secrets">
        <li>Secrets</li>
        <li> Add Folder</li>
      </ul>
      <div className="line"></div>
      <div className='img-content'>
      <img src="./assets/Group.png" alt="an group" className="image2"></img>
      <p className="right-content">
        You
        <span className="text-style-2"> do </span>
        not have acess to this
        <span className="text-style-2"> Safe </span>
        and cannot view it’s contents
      </p>
      </div>
      </div>
    </div>
  );
}

export default RightContainer;
