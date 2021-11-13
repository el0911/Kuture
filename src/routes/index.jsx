import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import OurRecipes from "./OurRecipes";
import CustomiseMenu from "../Components/CustomiseMenu";
import OrderSummary from "../Components/OrderSummary";
import CompletedOrder from "../Components/CompletedOrder";
// import Modal from "./Components/Modal";
import EachRecipe from "../Components/EachRecipe";
import DeliveryInformation from "./DeliveryInformation";
import Whyus from "./whyus";
import Layout from "../Components/layout";
import Login from "./login";
import Footer from "../Components/Footer";
import Subscribe from "./subscribe";
import HistoryPage from "./history";
export default function Routes() {
  return (

    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/allrecipes" component={OurRecipes} />
          <Route exact path="/customise" component={CustomiseMenu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={LandingPage} />
          <Route path="/recipe/:productId" component={EachRecipe} />
          <Route exact path="/deliveryinfo" component={DeliveryInformation} />
          <Route exact path="/ordersummary" component={OrderSummary} />
          <Route exact path="/completed" component={CompletedOrder} />
          <Route exact path="/whykulturefresh" component={Whyus} />
          <Route exact path="/sub" component={Subscribe} />
          <Route exact path="/history" component={HistoryPage} />
        </Layout>
      </Switch>
      <Footer />
    </Router>

  );
}
 