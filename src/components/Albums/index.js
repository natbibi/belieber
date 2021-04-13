import React, { useState } from 'react';
import {LikeButton, Listen} from '..'

const AlbumCards = () => {
    const [album, setAlbum] = useState([
        { id: '3BmcYMh0KYsimWL6p2gPa9', name: 'My World 2.0', img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Myworld2.jpg", releaseDate: 2010 },
        { id: '63MKT9hwmiMFFdFp5SdB1p', name: 'Under The Mistletoe', img: "https://upload.wikimedia.org/wikipedia/en/4/49/Under_the_Mistletoe.jpg", releaseDate: 2011 },
        { id: '70f70xLCpH7wHaVvB2oZT9', name: 'Believe', img: "https://upload.wikimedia.org/wikipedia/en/0/01/Believe-JB-Album.jpg", releaseDate: 2012 },
        { id: '6Fr2rQkZ383FcMqFyT7yPr', name: 'Purpose', img: "https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png", releaseDate: 2015 },
        { id: '63iWSELt9V1kV6RSMxN7Ii', name: 'Changes', img: "https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png", releaseDate: 2020 },
        { id: '6mzpIm84OXCBxw6Tuhp1OA', name: 'Justice', img: "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png", releaseDate: 2021 }
    ])

    const renderRows = () => {
        return album.map(p =>
            <div className="card col-3">
                <img src={p.img} className="card-img-top" alt="Album Cover" />
                <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.releaseDate}</p>
                    <LikeButton name={p.name}/>
                    <Listen songId={p.id}/>
                </div>
            </div>


           
        )
    }

    return (
        <div className="row">
            { renderRows()}
        </div>
    );
};

export default AlbumCards;