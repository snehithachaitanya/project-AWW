import React from 'react';
import Login from './components/AWWLogin.js';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Login />
    </div>
  );
};

export default App;
