import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";

function Lyrics(props){
    const [error, setError ] = useState()
    const [showLyrics, setShowLyrics] = useState(false)
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
    // const toggleLyrics = (e) => {
    //     e.stopPropagation()
    //     setShowLyrics('')
    //     setHideLyrics('')
    // }
    // const hideToggleLyrics = () => setShowLyrics(!showLyrics)
    
    function displayLyrics(){
        
        return setShowLyrics(true)
        
         
    } 


    if(showLyrics == true) { return (<p>{showLyrics}</p>)
    } else { 
        return (
        <div>
        <button onClick={displayLyrics} >show lyrics</button>
        <Loader type="TailSpin" color="hotpink" height={80} width={100} />
        </div>
    )}
}

export default Lyrics