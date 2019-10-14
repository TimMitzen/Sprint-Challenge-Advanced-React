import React from 'react';
import Api from './components/api'
import './App.css';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Api />
    </div>
  );
}

export default App;
