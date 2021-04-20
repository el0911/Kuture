import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import OurRecipes from "./Components/OurRecipes";
import CustomiseMenu from "./Components/CustomiseMenu";
import OrderSummary from "./Components/OrderSummary";
import CompletedOrder from "./Components/CompletedOrder";
import Modal from "./Components/Modal";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/allrecipes" component={OurRecipes} />
        <Route exact path="/customise" component={CustomiseMenu} />
        <Route exact path="/recipe" component={Modal} />

        <Route exact path="/ordersummary" component={OrderSummary} />
        <Route exact path="/completed" component={CompletedOrder} />
      </Switch>
    </Router>
  );
}
