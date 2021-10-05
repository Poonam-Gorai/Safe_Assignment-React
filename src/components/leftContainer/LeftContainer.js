import "./LeftContainer.css";
import Button from '../button/Button';
import LeftContainerHeader from './LeftContainerHeader';
import { useSelector } from "react-redux";

function LeftContainer() {
  const state  = useSelector((state) => state.createSafe.safes)
   console.log('state',state);
   return <div className="left-container">
      <LeftContainerHeader/>
      <Button/>
    </div>;
  }
  
  export default LeftContainer;