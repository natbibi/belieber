import React, {useState} from 'react'

// button that counts the total number of likes clicked
// render the count number from likeButton

function Counter(){
    const [totalLikes, setTotalLikes ] = useState(0)

    // const increaseLikes = () => setCounter(counter + 1)  
    // const addLikes = () => setTotalLikes(props.likeCounter)
    // console.log(addLikes)

    return(
        <div>
        
        {/* <button aria-label="counter" onClick={increaseLikes}>
            Number of times liked
        </button> */}
        <p>There are {totalLikes}</p>
        </div>


    )
}

export default Counter