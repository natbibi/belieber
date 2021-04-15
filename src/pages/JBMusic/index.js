import React, { useState } from 'react'
import { Albums, Song, Counter } from '../../components'


const JBMusic = () => {
    const [album, setAlbum] = useState([
        { id: 1, albumCode: '3BmcYMh0KYsimWL6p2gPa9', name: 'My World 2.0', img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Myworld2.jpg", releaseDate: 2010, title: 'Baby' },
        { id: 2, albumCode: '63MKT9hwmiMFFdFp5SdB1p', name: 'Under The Mistletoe', img: "https://upload.wikimedia.org/wikipedia/en/4/49/Under_the_Mistletoe.jpg", releaseDate: 2011, title: 'Mistletoe' },
        { id: 3, albumCode: '70f70xLCpH7wHaVvB2oZT9', name: 'Believe', img: "https://upload.wikimedia.org/wikipedia/en/0/01/Believe-JB-Album.jpg", releaseDate: 2012, title: 'Boyfriend' },
        { id: 4, albumCode: '6Fr2rQkZ383FcMqFyT7yPr', name: 'Purpose', img: "https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png", releaseDate: 2015, title: 'Love-yourself' },
        { id: 5, albumCode: '63iWSELt9V1kV6RSMxN7Ii', name: 'Changes', img: "https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png", releaseDate: 2020, title: 'Intentions' },
        { id: 6, albumCode: '6mzpIm84OXCBxw6Tuhp1OA', name: 'Justice', img: "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png", releaseDate: 2021, title: 'Peaches' }
    ])

    const renderRows = () => {
        return album.map(p =>
            <Albums album={p} key={p.id} />
        );
    }

    const renderSongTitle = () => {
        return album.map(p =>
            <Song album={p} key={p.id} />
        );
    }

    return (
        <div className="row">
            { renderRows()}
            { renderSongTitle()}
        </div>
    )
}

export default JBMusic