import React, { Component } from 'react';
import Home from "./Component/Home";
import Login from "./Login";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import "./App.css";
export default class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
  }
  render() {
    return (
      <div>
        <Router>
         {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
