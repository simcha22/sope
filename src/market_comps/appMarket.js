import React from "react";
import HeaderMarket from "./headerMarket";
import MainMarket from "./mainMarket";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProd from "./admin/add_prod";
import Login from "./admin/login";

function AppMarket(props) {
  return (
    <Router>
      <HeaderMarket />
      <Switch>
        <Route exact path="/" component={MainMarket} />
        <Route exact path="/cat/:name" component={MainMarket} />
        <Route exact path="/search/:q" component={MainMarket} />
        <Route exact path="/admin/add_prod" component={AddProd} />
        <Route exact path="/admin/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default AppMarket;
