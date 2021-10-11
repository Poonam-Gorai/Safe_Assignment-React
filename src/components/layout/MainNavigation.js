import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from '../../assets/logo.svg';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo"></img>
      <nav>
        <ul>
          <li>
            <Link to="/">Safes</Link>
          </li>
          <li>
            <Link to="/VaultAppsRolesPage?queryname=this is a test&age=10">Vault Apps Roles</Link>
          </li>
          <li>
            <Link to="/ServiceAccountsPage">Service Accounts</Link>
          </li>
          <li>
            <Link to="/IAMServiceAccountsPage">IAM Service Accounts</Link>
          </li>
          <li>
            <Link to="/AzureActiveDirectoryPage">Azure Active Directory</Link>
          </li>
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
