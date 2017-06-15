import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sample from './sample';
import About from './About';
import Params from './Params';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Sample} />
            <Route path="/About" component={About} />
            <Route path="/params/:foo" component={Params} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;