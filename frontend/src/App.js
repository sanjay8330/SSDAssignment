import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Home from "./components/home";
import Login from "./components/userManagement/login";
import UserHome from "./components/userManagement/userHome";
import AdminHome from "./components/adminManagement/adminHome";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/userHome/:id" component={UserHome} />
            <Route path="/adminHome/:id" component={AdminHome} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;