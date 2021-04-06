import React from "react";
import HeaderMarket from "./headerMarket";
import MainMarket from "./mainMarket";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProd from "./admin/add_prod";
import Login from "./admin/login";
import { ToastProvider } from "react-toast-notifications";
import ProdUserList from "./admin/prodUserList";


function AppMarket(props) {
  return (
    <Router>
      <ToastProvider>
        <HeaderMarket />
        <Switch>
          <Route exact path="/" component={MainMarket} />
          <Route exact path="/cat/:name" component={MainMarket} />
          <Route exact path="/search/:q" component={MainMarket} />
          <Route exact path="/admin/add_prod" component={AddProd} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/prodUserList" component={ProdUserList} />

        </Switch>
      </ToastProvider>
    </Router>
  );
}

export default AppMarket;
