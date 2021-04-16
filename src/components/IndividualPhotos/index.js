import React from 'react'
import { useParams } from 'react-router-dom';
// import { Photos } from '../../pages'

function GetIndividualPhoto({photo}){
const params = useParams();
    console.log(photo.id)
    return(
        <>
        <div className="row">
        <div className="card border-success col-3">
        <img src={photo.img} className="card-img-top" alt="Justin Bieber"/>
        </div>
        </div>
        </>

    )
    console.log(onePhoto)
}
 export default GetIndividualPhoto