import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import AddIndividual from "../components/individuals/AddIndividual";
import Individual from "../components/individual.component";
import IndividualsList from "../components/individuals-list.component";

class App extends Component {
  render() {
    console.log("reached app");
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/individuals" className="navbar-brand">
              Stemma
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/individuals"} className="nav-link">
                 Individuals
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            {/* debug */}
            <Switch>
              <Route exact path="/individuals" component={IndividualsList} />
              <Route path="/add" component={AddIndividual} />
              <Route path="/individuals/:id" component={Individual} /> 
            </Switch> 
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
