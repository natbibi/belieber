import React, { useState, useEffect } from 'react'
import { Counter } from '..'

function LikeButton() {
    let [liked, setLiked] = useState('false')
    let [likeCounter, setLikeCounter] = useState(randomLargeNumber())


    function randomLargeNumber() {
        return Math.floor(Math.random() * 100000)
    }

    function handleLikeButton(e) {
        e.stopPropagation()
        setLiked(!liked)
        setLikeCounter(likeCounter + 1)
    }

    function addRandomNumber() {
        return Math.floor(Math.random() * 100)
    }

    useEffect(() => {
        let randomNum = addRandomNumber()
        const stream = setInterval(() => {
            setLikeCounter(likeCounter + randomNum) 
        }, 1000)
        return () => clearInterval(stream)
    })

    return (

        <div className="heart-like">
            <span role="switch" onClick={handleLikeButton} style={{ fontSize: '5rem', color: liked ? 'pink' : 'hotpink' }}><i className="far fa-heart"></i></span>
            <p>{likeCounter} likes </p>


        </div>
    )
}


export default LikeButton