import React from 'react';
import { Header, Footer } from './layout'
import './App.css';
import { JBMusic, Lyrics, Bio, PageNotFound } from './pages';
import { Route, Switch } from 'react-router-dom'

function App () { 
   return (
    <div className="container">
       
      <Header />
      <Switch>
         <Route exact path="/" component={JBMusic} />
         <Route path="/lyrics" component={Lyrics} />
         <Route path="/bio" component={Bio} />
         <Route path="/" component={PageNotFound} />

      </Switch>
      
      
      <Footer />

    </div>
   )
}


export default App