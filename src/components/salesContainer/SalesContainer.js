import LeftContainer from '../leftContainer/LeftContainer';
import RightContainer from '../rightContainer/RightContainer';
import "./SalesContainer.css";

function SalesContainer() {
  return (
    <div className="main-content">
    <div className="container">
      <LeftContainer/>
      <RightContainer />
    </div>
    </div>
  );
}

export default SalesContainer;
