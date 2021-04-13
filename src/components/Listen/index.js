import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Listen = (props) => {
    const [listen, setListen] = useState()
    const [error, setError ] = useState()

    useEffect(() => {
        async function listenToSong(){
            try {

                ///let {data } = await axios.get(`https://api.spotify.com/v1/albums/${props.songId}`)

                // console.log(data)
                // console.log(data.items)
                
                setListen(data.items)

            } catch (err) {
                setError(err.message)
            }
        }
        listenToSong()
    }, [])
    
    const openSpotifyPage = (e) => {
        e.preventDefault()
        //const openPage = <a href="https://open.spotify.com/album/6mzpIm84OXCBxw6Tuhp1OA" target="_blank"></a>
        window.location.href=`${listen}`
        console.log(get_spotify_api_token())

    }
    
    
    return (
        <>
        {/* <button onClick={openSpotifyPage}>listen </button>
        */}



        </>
    )
}

export default Listen