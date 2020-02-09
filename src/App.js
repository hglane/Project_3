import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
// import TaskBank from "./components/TaskBank";
// import TaskList from "./components/TaskList";
import './App.css';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Wrapper>
            <div>Temporary Div in place of Routes</div>
            {/* <Route exact path="/" component={Calendar} />
            <Route exact path="/tasks" component={TaskBank} />
            <Route exact path="/tasks" component={TaskBank} />
            <Route exact path="/tasks" component={TaskBank} /> */}
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;