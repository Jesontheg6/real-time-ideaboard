import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import IdeasContainer from './components/IdeasContainer'
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
