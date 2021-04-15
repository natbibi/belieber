import React, { useState } from 'react'
import { Albums, Song } from '../../components'


const Lyrics = () => {
    const [song, setSong] = useState([
        { id: 1, songTitle: 'Baby' },
        { id: 2, songTitle: 'Mistletoe' },
        { id: 3, songTitle: 'Boyfriend' },
        { id: 4, songTitle: 'Love-yourself' },
        { id: 5, songTitle: 'Intentions' },
        { id: 6, songTitle: 'Peaches' },
    ])

    const renderSongTitle = () => {
        return song.map(p =>
            <Song song={p} key={p.id} />
        );
    }
    return (
        <>
            <h1>Lyrics</h1>
            { renderSongTitle()}
        </>
    )
}


export default Lyrics