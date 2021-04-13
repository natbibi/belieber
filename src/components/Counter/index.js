import React, {useState} from 'react'

// button that counts the number of likes clicked
// render the count number and the album name

function Counter(){
    const [counter, setCounter ] = useState(0)

    const increaseLikes = () => setCounter(counter + 1)  

    return(
        <>
        
        {/* <button aria-label="counter" onClick={increaseLikes}>
            Number of times liked
        </button> */}
        <p>There are {counter} likes</p>
        </>


    )
}

export default Counter