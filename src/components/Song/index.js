import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Song = ({ album }) => {
    const [listen, setListen] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function listenToSong() {
            try {

                let { data } = await axios.get(`https://api.lyrics.ovh/v1/justin-bieber/${album.title}`)

                console.log(data)
                // console.log(data.items)

                setListen(listen)

            } catch (err) {
                setError(err.message)
            }
        }
        listenToSong()
    }, [])

    return (
        <>
            {album.title}
        </>
    )




}

export default Song