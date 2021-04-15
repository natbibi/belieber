import React, { useState } from 'react'
import { Counter } from '..'

function LikeButton() {
    let [liked, setLiked] = useState('false')
    let [likeCounter, setLikeCounter] = useState(randomNumber())


    function randomNumber() {
        return Math.floor(Math.random() * 100000)
    }

    function handleLikeButton(e) {
        e.stopPropagation()
        setLiked(!liked)
        setLikeCounter(likeCounter + 1)
    }


    return (

        <div className="heart-like">
            <span role="switch" onClick={handleLikeButton} style={{ fontSize: '5rem', color: liked ? 'pink' : 'hotpink' }}><i className="far fa-heart"></i></span>
            <p>{likeCounter} likes </p>


        </div>
    )
}


export default LikeButton