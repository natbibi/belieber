import React from 'react';
import Artists from './components/Artists';
import Albums from './components/Albums'
import './App.css';

function App () { 
   return (
    <div className="container">
    <h1>Semhar & Natalie's Favourite Artist!</h1>
    <Artists />
    <Albums />
    </div>
   )
}


export default App