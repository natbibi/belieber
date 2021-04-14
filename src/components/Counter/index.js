import React, {useState} from 'react'

// button that counts the total number of likes clicked
// render the count number from likeButton

function Counter(props){
    const [totalLikes, setTotalLikes ] = useState(props.numberOfLikes)

    // const increaseLikes = () => setCounter(counter + 1)  
    // const addLikes = () => setTotalLikes(props.likeCounter)
    // console.log(addLikes)

    const addTotalLikes = props.numberOfLikes


    return(
        <div>
        
        {/* <button aria-label="counter" onClick={increaseLikes}>
            Number of times liked
        </button> */}
        <p>There are {addTotalLikes}</p>
        </div>


    )
}

export default Counter