import React, { useState } from 'react'
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { Albums, Song, Counter } from '../../components'


const JBMusic = () => {
    const [album, setAlbum] = useState([
        { id: 1, albumCode: '6mzpIm84OXCBxw6Tuhp1OA', name: 'Justice', img: "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png", releaseDate: 2021, title: 'Peaches' },
        { id: 2, albumCode: '63iWSELt9V1kV6RSMxN7Ii', name: 'Changes', img: "https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png", releaseDate: 2020, title: 'Intentions' },
        { id: 3, albumCode: '6Fr2rQkZ383FcMqFyT7yPr', name: 'Purpose', img: "https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png", releaseDate: 2015, title: 'Love-yourself' },
        { id: 4, albumCode: '70f70xLCpH7wHaVvB2oZT9', name: 'Believe', img: "https://upload.wikimedia.org/wikipedia/en/0/01/Believe-JB-Album.jpg", releaseDate: 2012, title: 'Boyfriend' },
        { id: 5, albumCode: '63MKT9hwmiMFFdFp5SdB1p', name: 'Under The Mistletoe', img: "https://upload.wikimedia.org/wikipedia/en/4/49/Under_the_Mistletoe.jpg", releaseDate: 2011, title: 'Mistletoe' },
        { id: 6, albumCode: '3BmcYMh0KYsimWL6p2gPa9', name: 'My World 2.0', img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Myworld2.jpg", releaseDate: 2010, title: 'Baby' }
    ])

    const history = useHistory();



    const handleSelect = (id) => {
        history.push(`albums/${(id)}`)
        console.log(id)
    }


    const prevAlbum = (id) => {
        if (id.id <= 1) {
            history.push(`/albums/1`)
        } else {
            history.push(`/albums/${(id.id - 1)}`)
        }
    }

    const nextAlbum = (id) => {
        if (id === undefined) {
            history.push(`/albums/6`)
            console.log('hiya')
        } else {
            history.push(`/albums/${(id.id)}`)
            console.log(id)
        }
    }

    const albumsList = album.map((album) => (
        <Albums key={album.id} album={album} handleSelect={handleSelect} />
    ))


    return (
        <>
            <h1>Albums</h1>
            <section>
                {
                    <Switch>
                        {/* Render props*/}
                        <Route exact path={"/albums"} render={() => (<div className="row">{albumsList}</div>)} />
                        {/* Dynamic route params */}

                        <Route path={"/albums/:id"} render={({ match }) => (
                            <div className="album-page">
                                <button className="album-nav" onClick={() => prevAlbum(album[match.params.id - 1])}>prev</button>
                                <Albums album={album[match.params.id - 1]} handleSelect={() => { }} />
                                <button className="album-nav" onClick={() => nextAlbum(album[match.params.id])}>next</button>
                            </div>
                        )} />
                    </Switch>
                }
            </section>

        </>
    )
}

export default JBMusic