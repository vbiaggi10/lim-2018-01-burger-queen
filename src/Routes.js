import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import TakeName from './components/take_name/TakeName';
import Page404 from "./components/page_404/Page404";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={TakeName} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;
