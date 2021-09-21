import './phototile.css';
import React, { useState, useEffect } from "react";
import Heart from './heart';
import Loading from './loading';
import Description from './description';

export default function PhotoTile(props) {
    const [photo, setPhoto] = useState([])
    const [loading, setLoading] = useState(true)
    const regex = /(jpg)$/

    useEffect(() => {
        let url = "https://api.nasa.gov/planetary/apod?start_date=2021-09-01&api_key=yJo04DZWQAhSHxCuIhKu79dvkJee25Kx0J5n43Pw"
        //TODO: change later
        //show only images - filter by img type only

        fetch(url) //await
            .then(result => result.json())
            .then(json => {
                setLoading(false)
                setPhoto(json)
            });
    }, [])

    return (
        <div class="page">
            {loading ? <Loading /> :
                <div className="flex">
                    {photo
                        .filter(photo => regex.test(photo.url))
                        .map(single_photo => (
                        <div className="tile">
                            <img className="tile_photos" src={single_photo.url} width="350px" height="350px" />
                            <div className="text">
                                <div className="tile_header">
                                <h2 className="tile_title">{single_photo.title}</h2>
                                <Heart uniqueID={single_photo.url}/>
                                </div>
                                <Description text={single_photo.explanation}/>
                                <p className="date">{single_photo.date}</p>
                            </div>
                        </div>
                    ))}
                </div>}
        </div>
    )

} //format photo tile part out