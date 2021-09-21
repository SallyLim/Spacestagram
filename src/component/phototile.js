import './phototile.css';
import React, { useState, useEffect } from "react";
import heart from './img/favorite_border.svg';


export default function PhotoTile(props) {
    const [photo, setPhoto] = useState([])
    const [loading, setLoading] = useState(true) //move loading over to here? - is gallery redundant?
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        let url = "https://api.nasa.gov/planetary/apod?count=10&api_key=yJo04DZWQAhSHxCuIhKu79dvkJee25Kx0J5n43Pw"
        //TODO: change later

        fetch(url)
            .then(result => result.json())
            .then(json => {
                setLoading(false)
                setPhoto(json)
            });
    },[])

    return (
        <div class="page">
            <div className="flex">
            {photo.map(single_photo => (
                <div className="tile">
                    <img className="tile_photos" src={single_photo.url} width="350px" height="350px"/>
                    <div className="text">
                        <img className="heart_icon" src={heart} alt="icon" />
                        <h2 className="tile_title">{single_photo.title}</h2>
                        <p className="description">{single_photo.explanation}</p>
                        <p className="date">{single_photo.date}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )

}