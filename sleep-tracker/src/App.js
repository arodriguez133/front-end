import React, {useState} from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Onboarding from './components/Onboarding';
import Nav from './components/Nav';
import './App.css';



function App() {


  return (
    <div className="App">
      <Nav/>
      <Login/>
      <Onboarding/>
      
      
    </div>
  );
}


export default App;
