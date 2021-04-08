import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import OurRecipes from "./Components/OurRecipes";
// import EachRecipe from "./Components/EachRecipe";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/allrecipes" component={OurRecipes} />
        {/* <Route exact path="/eachrecipe" component={EachRecipe} /> */}
      </Switch>
    </Router>
  );
}
