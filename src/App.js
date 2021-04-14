import React from 'react';
import { Header, Footer } from './layout'
import './App.css';
import { JBMusic, Lyrics, Bio } from './pages';
import { Route, Switch } from 'react-router-dom'

function App () { 
   return (
    <div className="container">
       
      <Header />
      <Switch>
         <Route exact path="/" component={JBMusic} />
         <Route path="/lyrics" component={Lyrics} />
         <Route path="/bio" component={Bio} />
      </Switch>
      
      
      <Footer />

    </div>
   )
}


export default App