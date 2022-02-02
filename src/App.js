import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { accessTokenParser } from "./utils";
import { roles } from "./utils";

import { Layout } from "./containers/_Layout";
import { Login } from "./containers/Login";
import { NotFound } from "./containers/NotFound";
import { Home } from "./containers/Home";

// ACCESS CONTROLLER
function PrivateRoute({ onlyFor, ...routeOptions }) {
  const { role } = accessTokenParser();
  if (onlyFor.includes(role)) {
    return (
      <Layout>
        <Route {...routeOptions} />
      </Layout>
    );
  }
  return <Redirect to="/login" />;
}

function App() {
  const { ALL_ROLES } = roles;
  // RENDER
  return (
    <Switch>
      <PrivateRoute exact path="/" onlyFor={ALL_ROLES} component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
