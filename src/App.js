import React from 'react';
import { Header, Footer } from './layout'
import './App.css';
import { JBMusic, LandingPage, Lyrics, Bio, Photos, PageNotFound } from './pages';
import { Route, Switch } from 'react-router-dom'

function App () { 
   return (
    <div className="container">
       
      <Header />
      <Switch>
         <Route exact path="/" component={LandingPage} />
         <Route path="/albums" component={JBMusic} />
         <Route path="/lyrics" component={Lyrics} />
         <Route path="/bio" component={Bio} />
         <Route path="/photos" component={Photos} />
         <Route path="/" component={PageNotFound} />

      </Switch>
      
      
      <Footer />

    </div>
   )
}


export default App