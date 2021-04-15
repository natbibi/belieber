import React, { useState } from 'react'
import { Albums, Song } from '../../components'
import Loader from 'react-loader-spinner'


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




    useEffect(() => {
        getLyrics()
        const stream = setInterval(getLyrics, 2000)

        return () => clearInterval(stream)
    }, [])

   

//  const lyricString = showLyrics
// console.log(lyricString.slice(0))
// console.log(lyricString.slice(1))


        return (
        <div>
        <h1>{songs}</h1>
        
        <p>{showLyrics}</p>
        
        <Loader type="Audio" color="hotpink" height={80} width={100} />
        </div>
    )
}


export default Lyrics