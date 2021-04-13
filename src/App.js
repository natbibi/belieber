import React from 'react';
import { Bio, Albums, Greeting } from './components'
import './App.css';

function App () { 
   return (
    <div className="container">
    
    <Bio />
    <Greeting />
    <Albums />
    </div>
   )
}


export default App