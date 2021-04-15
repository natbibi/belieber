import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'


function Lyrics(){
    const [song, setSong] = useState(['Baby', 'Mistletoe', 'Boyfriend', 'Love-yourself', 'Intentions', 'Peaches'])
    const [showLyrics, setShowLyrics] = useState(false)
    const [error, setError ] = useState()
    // console.log(song[0].songTitle)
    const songs = song.forEach(element => console.log(element))
    console.log(songs)

    // const renderLyrics = () => {
    //     song.map(p =>
    //     <p> {p.songTitle}</p>
    //         )
    // } 

    useEffect(() => {
        async function getLyrics(){
            try{
                let {data} = await axios.get(`https://api.lyrics.ovh/v1/justin-bieber/${songs}`)
                // console.log(data.lyrics)
                setShowLyrics(data.lyrics)
            } catch (err) {
                setError(err.message)
            }
        }
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