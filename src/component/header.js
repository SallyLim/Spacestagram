import './header.css';
import { useHistory } from "react-router-dom";


export default function Header(props) {
    const history = useHistory();

    const handleRoute = () =>{ 
        history.push("/");
      }

    return (
        <div class="header">
            <button className="home" onClick={handleRoute}>
                <div class="circle"></div>
                <h1 class="header-text">Spacestagram</h1>
            </button>
        </div>
    )

}