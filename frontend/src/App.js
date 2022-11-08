import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Home from "./components/home";
import Login from "./components/userManagement/login";
import UserHome from "./components/userManagement/userHome";
import AdminHome from "./components/adminManagement/adminHome";
import Users from "./components/adminManagement/users";
import UpdateUsers from "./components/adminManagement/updateUser";

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
            <Route path="/viewProfiles" component={Users} />
            <Route path="/viewUsers" component={Users} />
            <Route path="/updateUser/:id" component={UpdateUsers} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;