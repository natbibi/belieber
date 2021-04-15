import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { JBMusic } from '../../pages';

function goToAlbumPage(){
    return(
        <Router>
        <Route path="/albums">
            <JBMusic />
        </Route>
        <button><Link to="/albums">Explore Albums</Link></button>
         </Router>

  

       // <button onClick={goToAlbumPage}>Explore Albums</button>

    )
        
    }
    
export default goToAlbumPage