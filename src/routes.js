import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

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

const Routes = () => (
  <BrowserRouter>
    <Route render={(props)=>(
      <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute path="/Home" component={Home} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      )}/>
  </BrowserRouter>
);

export default Routes;