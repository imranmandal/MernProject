import React from 'react';
import AddUser from "./component/AddUser"
import Home from "./component/Home";
import ShowUser from "./component/ShowUser";
import Question from "./component/AskQuestionsComponent/question"
import HeaderComponent from "./component/HeaderComponent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AskQuestion from './component/AskQuestionsComponent/AskQuestion';
function App() {
  return <div className="container">

    <Router>
      <HeaderComponent/>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/add-user" component={AddUser} />
        <Route exact path="/show-user" component={ShowUser} />
        <Route exact path="/show-user/:id"  component={ShowUser} />
        <Route exact path="/ask-question"  component={AskQuestion} />
        <Route exact path="/question/:id" component={Question}/>




      </Switch>
    </Router>

  </div>


}

export default App;
