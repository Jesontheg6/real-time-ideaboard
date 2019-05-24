import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import AppHeader from './components/AppHeader'
import IdeasContainer from './components/IdeasContainer'
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Board from './components/Board' ;
=======
import IdeasContainer from './components/IdeasContainer'
>>>>>>> e4c4851... added connector

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <BrowserRouter>
      <div className="App">
        <Route path="/" component={AppHeader}/>
        <header className="App-header">
        <h1> Idea Board </h1>
        </header>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={IdeasContainer} />
      </div>
      </BrowserRouter>
=======
      <div className="App">
        <header className="App-header">
        <h1> Idea Board </h1>
        </header>
        <IdeasContainer/>
      </div>
>>>>>>> e4c4851... added connector
    );
  }
}

export default App;
