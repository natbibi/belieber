import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {ExploreButton, Greeting} from '../../components'

function LandingPage() {

    
    return (
        <div >
            <Greeting />
            <ExploreButton />
        </div>

    )
}

export default LandingPage