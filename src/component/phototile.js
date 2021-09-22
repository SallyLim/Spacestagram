import './phototile.css';
import React, { useState, useEffect } from "react";
import Heart from './heart';
import Loading from './loading';
import Description from './description';
import PageNumbers from './pageNumbers';

export default function PhotoTile(props) {
    const [photo, setPhoto] = useState([])
    const [loading, setLoading] = useState(true)
    const regex = /(jpg)$/
    const [pageNum, setPageNum] = useState(1)

    useEffect(() => {
        setLoading(true)
        const today = new Date();
        const start_date = new Date();
        const end_date = new Date();
        start_date.setDate(today.getDate() - 15 * (pageNum - 1));
        end_date.setDate(today.getDate() - 15 * pageNum);
        let url = "https://api.nasa.gov/planetary/apod?start_date=" +
            end_date.toISOString().split("T")[0] + "&end_date=" +
            start_date.toISOString().split("T")[0] +
            "&api_key=yJo04DZWQAhSHxCuIhKu79dvkJee25Kx0J5n43Pw"

        fetch(url)
            .then(result => result.json())
            .then(json => {
                setLoading(false)
                setPhoto(json)
            });
    }, [pageNum])

    return (
        <div class="page">
            {loading ? <Loading /> :
                <div className="flex">
                    {photo
                        .filter(photo => regex.test(photo.url))
                        .sort((a, b) => 
                            new Date(b.date) - new Date(a.date))
                        .map(single_photo => (
                            <div className="tile">
                                <div className="tile_photos_wrapper">
                                    <img className="tile_photos" src={single_photo.url} width="350"/>
                                </div>
                                <div className="text">
                                    <div className="tile_header">
                                        <h2 className="tile_title">{single_photo.title}</h2>
                                        <Heart uniqueID={single_photo.url} />
                                    </div>
                                    <Description text={single_photo.explanation} />
                                    <p className="date">{single_photo.date}</p>
                                </div>
                            </div>
                        ))}
                </div>}
            <PageNumbers pageNum={pageNum} setPageNum={setPageNum} />
        </div>
    )

} //format photo tile part out