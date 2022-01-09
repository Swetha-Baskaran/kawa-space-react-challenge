import React from 'react';
import './App.css';
import "./components/container.js";
import Container from './components/container.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Container />         
    </div>
  );
}

export default App;
