import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import TakeName from './components/take_name/TakeName';
import ViewOrders from './components/view_orders/ViewOrders';
import ViewRecord from './components/view_record/ViewRecord';
import Page404 from "./components/page_404/Page404";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/lim-2018-01-burger-queen/" component={TakeName} />
      <Route exact path="/lim-2018-01-burger-queen/pedidos/" component={ViewOrders} />
      <Route exact path="/lim-2018-01-burger-queen/historial/" component={ViewRecord} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;
