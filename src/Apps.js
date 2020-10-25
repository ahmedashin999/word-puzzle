import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz'
import CountDown from './pages/CountDown'
 import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/countdown" component={CountDown}/>
          <Route path="/quiz1" component={Quiz}/>
          {/* <Route path="/login" component={Login}/> */}
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;