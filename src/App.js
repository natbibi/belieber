import React from 'react';
import { Header, Footer } from './layout'
import './App.css';
import { JBMusic, LandingPage, Lyrics, Bio, Photos, Quiz, PageNotFound } from './pages';
import { GetIndividualPhoto } from './components'
import { Route, Switch } from 'react-router-dom'

function App() {
   return (
      <div className="main-container">

         <Header />
         <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/albums" component={JBMusic} />
            <Route path="/lyrics" component={Lyrics} />
            <Route path="/bio" component={Bio} />
            <Route path="/quiz" component={Quiz} />
            <Route exact path="/photos" component={Photos} />
            <Route path={"/photos/:id"} componenet={GetIndividualPhoto} />
            <Route path="/" component={PageNotFound} />

         </Switch>


         <Footer />

      </div>
   )
}


export default App