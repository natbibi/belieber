import React, { useState } from 'react';
import {LikeButton} from '..'

const AlbumCards = () => {
    const [album, setAlbum] = useState([
        { name: 'My World 2.0', img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Myworld2.jpg", releaseDate: 2010 },
        { name: 'Under The Mistletoe', img: "https://upload.wikimedia.org/wikipedia/en/4/49/Under_the_Mistletoe.jpg", releaseDate: 2011 },
        { name: 'Believe', img: "https://upload.wikimedia.org/wikipedia/en/0/01/Believe-JB-Album.jpg", releaseDate: 2012 },
        { name: 'Purpose', img: "https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png", releaseDate: 2015 },
        { name: 'Changes', img: "https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png", releaseDate: 2020 },
        { name: 'Justice', img: "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png", releaseDate: 2021 }
    ])

    const renderRows = () => {
        return album.map(p =>
            <div className="card col-3">
                <img src={p.img} className="card-img-top" alt="Album Cover" />
                <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.releaseDate}</p>
                    <LikeButton />
                </div>
            </div>


            // <tr><td>{p.name} <LikeButton /> </td><td><img src={p.img} /></td><td>{p.releaseDate}</td></tr>)
        )
    }

    return (
        <div className="row">
            { renderRows()}
        </div>
    );
};

export default AlbumCards;