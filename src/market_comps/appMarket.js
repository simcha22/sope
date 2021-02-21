import React from "react";
import HeaderMarket from "./headerMarket";
import MainMarket from "./mainMarket";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function AppMarket(props) {
  return (
    <Router>
      <HeaderMarket />
      <Switch>
        <Route exact path="/" component={MainMarket}></Route>
        <Route exact path="/cat/:catName" component={MainMarket}></Route>
      </Switch>
    </Router>
  );
}

export default AppMarket;
