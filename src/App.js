import React from 'react';
import { Bio, Albums, Greeting, Counter } from './components'
import './App.css';

function App () { 
   return (
    <div className="container">
    
    <Bio />
    <Greeting />
    <Counter />
    {/* get info from like button componenet */}
    <Albums />
    </div>
   )
}


export default App