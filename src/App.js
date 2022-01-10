import React from 'react';
import './App.css';
import "./components/container.js";
import Container from './components/container.js';
import Navbar from './components/navbar.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
         <Navbar />
         <Container />         
    </div>
  );
}

export default App;
