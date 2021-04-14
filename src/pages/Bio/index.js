import React from 'react'
import Loader from 'react-loader-spinner'


function Bio() {
    return (
        <>
        <h1>Justin Bieber</h1>
            <p>Teen-idol, Justin Bieber is a Canadian singer-songwriter. 
                With sales of over 150 million records, Bieber is one of the world's best-selling music artists. 
                At 16 years old, Bieber released his debut studio album My World 2.0 (2010), 
                which contained the hit single “Baby”. 
                The album debuted  the US Billboard 200, making Bieber the youngest solo male act to 
                top the chart in 47 years.</p>
        <Loader type="Audio" color="hotpink" height={100} width={100} />
        </>
    )
}

export default Bio