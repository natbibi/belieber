import React, {useState} from 'react'
import {GetIndividualPhoto} from '../../components'
import { useHistory, useParams, Switch, Route  } from 'react-router-dom';
// import Switch from 'react-bootstrap/esm/Switch';

function getPhotos(){
    const [photo, setPhoto ] = useState([
        {id: 1, img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg"},
        {id: 2, img: "https://pbs.twimg.com/media/ExGZhzGWUAcbE15.jpg"},
        {id: 3, img: "https://media.newyorker.com/photos/5e2b598351d1330009001749/2:2/w_1104,h_1104,c_limit/Fry-JustinBieberDocuseries.jpg"},
        {id: 4, img: "https://www.gannett-cdn.com/presto/2020/01/28/USAT/107a7fa1-22e7-4878-870d-a959c3f78acd-AFP_AFP_1OG6IB.JPG"},
        {id: 5, img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F12%2Fgettyimages-498329596-1-2000.jpg"}
    ])

    let { id } = useParams()
    const prevPhoto = () => history.push(`/photos/${id}`)
     
    const renderImages = () => {
        return photo.map(p =>
               <GetIndividualPhoto id={id} photoById={p.id} photo={p}/>
            
            )
    }
        const history = useHistory();
        const loadImage = id => history.push(`/photos/${photo.id}`)

    return (
        <div>
            <aside>
            {/* <NextButton handlePhotos={loadImage}/> */}
            </aside>
            <section>
                <h1>Photo Gallery</h1>
                {/* {setPhoto} */}
                    <Switch>
                    <Route exact path={"/photos"} component={renderImages}/>
                    {/* <Route path={"/photos/:id"}  componenet={GetIndividualPhoto}/> */}
                    </Switch>

            
            {renderImages()}
            </section>
            
  
        </div>

    )
}
export default getPhotos