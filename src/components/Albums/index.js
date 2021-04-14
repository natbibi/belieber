import React, { useState } from 'react';
import { LikeButton, Listen } from '../'


const Albums = ({ album }) => {

    const [showTopsong, setShowTopsong] = useState();

    const toggleTopsong = () => setShowTopsong(prevState => !prevState);


    return (
        // album.map(p =>
        <div className="card col-3">
            <img src={album.img} className="card-img-top" alt="Album Cover" />
            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <p className="card-text">{album.releaseDate}</p>
                <LikeButton />
                {/* <Lyrics title={p.title} /> */}
                {/* {showLyrics ? <Lyrics title={p.title} close={toggleLyrics}/> : <button onClick={toggleLyrics}>Show me lyrics</button>} */}
                <div className="topsong-container">
                <span className="x-button" onClick={toggleTopsong} style={{ cursor: "pointer" }}>x</span>
                    {
                        showTopsong ? album.title
                            : <button className="topsong-button" onClick={toggleTopsong}>See Top song of Album!</button>

                    }
                </div>
            </div>
        </div>
    )
};

export default Albums;