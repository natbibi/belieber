import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Lyrics(props){
    const [error, setError ] = useState()
    const [showLyrics, setShowLyrics] = useState()
    const [hideLyrics, setHideLyrics] = useState()
    

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


    // const displayLyrics = (e) => {
    //     e.preventDefault()
    //     setShowLyrics(showLyrics)
    // }
    const toggleLyrics = (e) => {
        e.stopPropagation()
        setShowLyrics('')
        setHideLyrics('')
    }
    // const hideToggleLyrics = () => setShowLyrics(!showLyrics)
 


    return (
    <div>
        {/* {showLyrics ? toggleLyrics : <button onClick={toggleLyrics}>Show me lyrics</button>} */}
        {/* <span onClick={hideToggleLyrics} style={{cursor: "pointer"}}> hide lyrics</span> */}
        <span onClick={toggleLyrics} style={{cursor: "pointer"}}> show lyrics </span>
        {/* {showLyrics && <button onClick={toggleLyrics} >Show me lyrics</button>} */}
        <p>{ toggleLyrics ?  showLyrics : hideLyrics}</p>
    </div>
    )
}

export default Lyrics