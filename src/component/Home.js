import './Home.css'
import ShowEarth from './showEarth'

export default function Home(props) {

    return (
        <div className="homepage">
            <h1 className="home_title">Explore Space</h1>
            <ShowEarth/>
            <button className="start_exploring">Start exploring!</button>
        </div>
    )
}