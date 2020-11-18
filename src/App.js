import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports';
import Services from './pages/Services';

function App (){
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/services' component={Services} />
         </Switch>
      </Router>
      </>
    );
  }

export default App;
