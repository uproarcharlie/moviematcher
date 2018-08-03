/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import MoviesList from './moviesList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
      <div className="App">
        <header className="App-header">
          <Link className="App-title" to="/">
          Movie Match
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
);

export default App;

const Test = ({ match }) => (
  <h1>{match.params.id}</h1>
);
