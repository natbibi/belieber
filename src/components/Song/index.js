import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Song = ({ song }) => {
    const [listen, setListen] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function listenToSong() {
            try {

                let { data } = await axios.get(`https://api.lyrics.ovh/v1/justin-bieber/${song.songTitle}`)

                // console.log(data)
                // console.log(data.items)

                setListen(data.lyrics)


            } catch (err) {
                setError(err.message)
            }
        }
        listenToSong()
    }, [])

    return (
        <>
            <h2>{song.songTitle}</h2>
            <p>{listen}</p>
        </>
    )




}

export default Song