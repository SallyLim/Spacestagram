import './gallery.css';
import Loading from './loading';
import PhotoTile from './phototile';


export default function Gallery(props) {

    return (
        <div >
            <h1 class="title">Explore Space</h1>
            {/* <Loading/> */}
            <PhotoTile/>
        </div>
    )

}