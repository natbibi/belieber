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
        <div>
            <span role="switch" onClick={handleLikeButton} style={{ fontSize: '5rem', color: liked ? 'lightgrey' : 'hotpink' }}>❤︎</span>
        </div>
    )
}


export default LikeButton