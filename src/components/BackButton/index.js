import React from 'react'
import {useHistory} from 'react-router-dom'

function BackButton(){
    const history = useHistory()

    return (
        <button id="back-button" aria-label="back-button" onClick={history.goBack}>
        🔙 
        </button>

    )
}

export default BackButton