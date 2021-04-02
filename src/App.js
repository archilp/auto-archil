import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
// import Home from './components/pages/signin'

import './App.css';
import signin from './components/pages/signin'

function App(){
  return(
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Sign-Up' exact component={signin}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
