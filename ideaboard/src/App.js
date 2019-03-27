import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import IdeasContainer from './components/IdeasContainer'
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Board from './components/Board' ;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route path="/" component={AppHeader}/>
        <header className="App-header">
        </header>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    
        <Route exact path="/" component={IdeasContainer} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
