import { Route, Switch } from "react-router-dom";

import SalesPage from './pages/Sales/Sales';
import IAMServiceAccountsPage from './pages/iamServiceaccounts/IAMServiceAccounts';
import ServiceAccountsPage from './pages/serviceAccounts/ServiceAccounts';
import VaultAppsRolesPage from './pages/vaultApps/VaultAppsRoles';
import AzureActiveDirectoryPage from './pages/azureActiveDirectory/AzureActiveDirectory';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path="/" exact>
        <SalesPage />
      </Route>
      <Route path="/AzureActiveDirectoryPage" exact>
        <AzureActiveDirectoryPage />
      </Route>
      <Route path="/IAMServiceAccountsPage" exact>
        <IAMServiceAccountsPage />
      </Route>
      <Route path="/ServiceAccountsPage" exact>
        <ServiceAccountsPage />
      </Route>
      <Route path="/VaultAppsRolesPage" exact>
        <VaultAppsRolesPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
