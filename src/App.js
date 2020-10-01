import React from 'react';
import AddUser from "./component/AddUser"
import Home from "./component/Home";
import ShowUser from "./component/ShowUser";
import Nav from "./component/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return <div className="container">

    <Router>
      <Nav />
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/add-user" component={AddUser} />
        <Route path="/show-user" component={ShowUser} />


      </Switch>
    </Router>

  </div>


}

export default App;
