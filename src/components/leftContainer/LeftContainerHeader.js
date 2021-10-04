import "./LeftContainerHeader.css";
import Search from "../search/Search";

function LeftContainerHeader() {
    return <header className="left-container-header">
      <span className='allsafe'>All Safes (1)</span>
      <Search/>
    </header>;
  }
  
  export default LeftContainerHeader;