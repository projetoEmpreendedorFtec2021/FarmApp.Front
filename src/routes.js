import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ProductsWith from "./pages/ProductsWith";
import ProductsWithout from "./pages/ProductsWithout";


import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const UnauthorizedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/Home", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Route render={(props)=>(
      <Switch>
          <UnauthorizedRoute exact path="/" component={SignIn} />
          <PrivateRoute path="/Home" component={Home} />
          <PrivateRoute path="/ProductsWith" component={ProductsWith} />
          <PrivateRoute path="/ProductsWithout" component={ProductsWithout} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      )}/>
  </BrowserRouter>
);

export default Routes;