import "./LeftContainer.css";
import Button from '../button/Button';
import LeftContainerHeader from './LeftContainerHeader';

function LeftContainer() {
    return <aside className="left-container">
      <LeftContainerHeader/>
      <Button/>
    </aside>;
  }
  
  export default LeftContainer;