import React, {useState} from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Onboarding from './components/Onboarding';
import './App.css';



function App() {


  return (
    <div className="App">
      <Login/>
      <Onboarding/>
    </div>
  );
}


export default App;
