import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';


import Home from './Pages/Home.jsx';
import CharacterBuilder from './Pages/CharBuilder';
import CharacterInfo from './Pages/CharacterInfo';
import LoginPage from './Pages/LoginPage';
import BattleHelper from './Pages/BattleHelper';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Route exact path="/" component ={Home}/>
         <Route exact path="/CharacterBuilder" component = {CharacterBuilder}/>
         <Route exact path="/CharacterInfo" component = {CharacterInfo}/>
         <Route exact path="/LoginPage" component = {LoginPage}/>
         <Route exact path="/BattleHelper" component = {BattleHelper}/>
       
       </div>
     </Router>
    );
  }
}

export default App;