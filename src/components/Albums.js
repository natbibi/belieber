import React, { useState } from 'react';

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
        return album.map(p => <tr><td>{p.name}</td><td><img src={p.img} /></td><td>{p.releaseDate}</td></tr>)
    }

    return (
        <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

export default AlbumCards;