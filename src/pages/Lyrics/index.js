import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Lyrics(){
    const [song, setSong] = useState([
        { id: 1, songTitle: 'Baby' },
        { id: 2, songTitle: 'Mistletoe' },
        { id: 3, songTitle: 'Boyfriend' },
        { id: 4, songTitle: 'Love-yourself' },
        { id: 5, songTitle: 'Intentions' },
        { id: 6, songTitle: 'Peaches' },
    ])
    const [showLyrics, setShowLyrics] = useState()
    const [error, setError ] = useState()
    console.log(song[0].songTitle)
    

    const renderLyrics = () => {
        song.map(p =>
        <p> {p.songTitle}</p>
            )
    } 

    useEffect(() => {
        async function getLyrics(){
            try{
                let {data} = await axios.get(`https://api.lyrics.ovh/v1/justin-bieber/${song[i].songTitle} `)
                // console.log(data.lyrics)
                setShowLyrics(data.lyrics)
            } catch (err) {
                setError(err.message)
            }
        }
        getLyrics()
    }, [])


        return (
        <div>
        <p>{song[0].songTitle}</p>
        <p>{showLyrics}</p>
        
        {/* <Loader type="TailSpin" color="hotpink" height={80} width={100} /> */}
        </div>
    )
}


export default Lyrics