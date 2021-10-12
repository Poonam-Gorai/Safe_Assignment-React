import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from '../../assets/logo.svg';
import{MenuList} from './MenuList'

function MainNavigation() {

  const menuList = MenuList.map(({url,title},index) =>{

    return(
    <li key={index}>
      <Link to={url} activeClassName="active">{title}</Link>
    </li>)
  })

  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"></img>
      <nav>
        <ul>
         {menuList}
        </ul>
        <ul className='right'>
          <li>Documentation</li>
          <li>(Admin) Davis R.</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
