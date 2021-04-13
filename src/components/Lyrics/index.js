import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Lyrics(props){
    const [error, setError ] = useState()
    const [showLyrics, setShowLyrics] = useState()

    useEffect(() => {
        async function getLyrics(){
            try{
                let {data} = await axios.get(`https://api.lyrics.ovh/v1/justin-bieber/${props.title} `)
                console.log(data.lyrics)
                setShowLyrics(data.lyrics)
            } catch (err) {
                setError(err.message)
            }
        }
        getLyrics()
    }, [])






    return (
    <div>
        <h6>{props.title}</h6>
        <p>{showLyrics}</p>
    </div>
    )
}

export default Lyrics