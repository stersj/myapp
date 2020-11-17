import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'

function App (){
  return (
    <Router>
        <Navbar />
        <Switch>
         <Route path='/' exact component={Home} />
         </Switch>
      </Router>
    );
  }

export default App;
