import React, { useState } from 'react'

function LikeButton() {
    const [liked, setLiked] = useState('false')


    function handleLikeButton(e) {
        e.stopPropagation()
        setLiked(!liked)

        // if (LikeButton.textContent === '💜') {
        //     (LikeButton.textContent === '💖')
        // } else {
        //     (LikeButton.textContent === '💜')
        // }

    }

    return (
        <div className="heart-like">
            <span role="switch" onClick={handleLikeButton} style={{ fontSize: '5rem', color: liked ? 'lightgrey' : 'hotpink' }}><i class="far fa-heart"></i></span>
        </div>
    )
}


export default LikeButton