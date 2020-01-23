import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Recruiter from './components/Recruiter/Recruiter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Candidate from './components/Candidate/Candidate';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="RouterApp">
          <Switch>
            <Route path="/recruiter" component={Recruiter} />
            <Route path="/candidate" component={Candidate} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}


export default App;