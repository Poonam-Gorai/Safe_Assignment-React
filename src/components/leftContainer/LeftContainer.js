import "./LeftContainer.css";
import Button from "../button/Button";
import LeftContainerHeader from "./LeftContainerHeader";

import CreateNewSafe from "./createNewSafe/CreateNewSafe";

function LeftContainer({ setAddButtonDisable, setSelectedSafe,setcurrentIndex }) {
  return (
    <div className="left-container">
      <LeftContainerHeader />
      <div className="safelist">
        <CreateNewSafe
          setAddButtonDisable={setAddButtonDisable}
          setSelectedSafe={setSelectedSafe}
          setcurrentIndex={setcurrentIndex}
        />
      </div>
      <Button />
    </div>
  );
}

export default LeftContainer;
