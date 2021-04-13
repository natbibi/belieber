import React, { useState } from 'react'

function LikeButton(props) {
    let [liked, setLiked] = useState('false')
    let [likeCounter, setLikeCounter] = useState(0)

            

    function handleLikeButton(e) {
        e.stopPropagation()
        setLiked(!liked)
        setLikeCounter(likeCounter + 1)

       let albumName = props.name
            console.log(albumName)
            console.log(++likeCounter)

    }


    return (

        <div className="heart-like">
            <span role="switch" onClick={handleLikeButton} style={{ fontSize: '5rem', color: liked ? 'lightgrey' : 'hotpink' }}><i className="far fa-heart"></i></span>
    <p>{likeCounter} likes </p>
            
            
        </div>
    )
}


export default LikeButton