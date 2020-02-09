import React from 'react';
import voting from './voting.svg';
import candidate from './candidate.svg';
import newspaper from './newspaper.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header style={{height: "30px"}} className="App-header">
          <p style={{fontSize: "2em"}}>
            candi<span>day (in the life)</span>
          </p>
          <Link to="/scene1"><button className="start-button" onclick="window.location.href = 'https://w3docs.com';">Start Game</button></Link>
        </header>
      </div>
      <div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/scene1">
            <Scene />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
    <h2>Description</h2>
  </div>
  )
}

function Scene() {
  return (
    <div>
      <h2>Scene</h2>
    </div>
  );
}

export default App;
