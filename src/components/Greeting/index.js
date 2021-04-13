import React, { useState } from 'react'


function Greeting() {
    const [username, setUsername] = useState('')
    const [nameInput, setNameInput] = useState('')


    const handleInput = e => setNameInput(e.target.value)

    const handleFormSubmit = e => {
        e.preventDefault()
        setUsername(nameInput)
        setNameInput('')
    }

    return (
        <div className="greeting-container">
            <h3 aria-label='greeting' id='greeting'>Hi there, {username ? username : 'belieber'}! </h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username"> Username </label>
                <input type="text" name="username" id="username" placeholder="Enter your name" onChange={handleInput} />
                <input type="submit" value="update" />
            </form>
        </div>

    )
}

export default Greeting