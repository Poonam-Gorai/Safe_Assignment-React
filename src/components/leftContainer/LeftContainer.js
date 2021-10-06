import "./LeftContainer.css";
import Button from "../button/Button";
import LeftContainerHeader from "./LeftContainerHeader";

import CreateNewSafe from "./createNewSafe/CreateNewSafe";

function LeftContainer() {
  

  return (
    <div className="left-container">
      <LeftContainerHeader />
      <div className='safelist'>
      <CreateNewSafe/>
      </div>
      <Button />
    </div>
  );
}

export default LeftContainer;
