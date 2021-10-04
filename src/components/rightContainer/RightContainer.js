import React from "react";
import Image from '../image/Image'
import "./RightContainer.css";

function RightContainer() {
  return (
    <aside className="right-container">
      <Image />
      {/*<span className="Sample">Sample / SafeName</span>
      <p className="content">
        A Safe is a logical unit to store the secrets. All the safes are created
        within Vault. You can control access only at the safe level. As a vault
        administrator you can manage safes but cannot view the content of the
        safe.
      </p>*/}
      <div className="secrets">
        <div className="leftflex">
          <li>Secrets</li>
          <li>Permissions</li>
        </div>
        <li className="folder"> Add Folder</li>
      </div>
      <div className="line"></div>
      <img src="./assets/Group.png" alt='an group' className="image2"></img>
      <span className="right-content">
        You
        <span className="text-style-2"> do </span>
        not have acess to this
        <span className="text-style-2"> Safe </span>
        and cannot view it’s contents
      </span>
    </aside>
  );
}

export default RightContainer;
