import './heart.css';
import heart from './img/favorite_border.svg';
import filledHeart from './img/heart.svg';
import useLocalStorage from './useLocalStorage';


export default function Heart({uniqueID}) {
    const [liked, setLiked] = useLocalStorage(uniqueID)

    return (
        <div onClick={() => setLiked(!liked)}>
            <img className="heart_icon" src={liked ? filledHeart : heart} alt="icon" />
        </div>
    )
}