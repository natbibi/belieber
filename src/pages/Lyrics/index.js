import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";

function Lyrics(props){
console.log(props.title)

const [error, setError ] = useState()
    const [showLyrics, setShowLyrics] = useState()
    // const [hideLyrics, setHideLyrics] = useState()
    

    useEffect(() => {
        async function getLyrics(){
            try{
                let {data} = await axios.get(`https://api.lyrics.ovh/v1/justin-bieber/${props.title} `)
              
                setShowLyrics(data.lyrics)
            } catch (err) {
                setError(err.message)
            }
        }
        getLyrics()
    }, [])


        return (
        <div>
        <p>{showLyrics}</p>
        
        {/* <Loader type="TailSpin" color="hotpink" height={80} width={100} /> */}
        </div>
    )
}


export default Lyrics