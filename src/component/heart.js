import './heart.css';
import heart from './img/favorite_border.svg';
import filledHeart from './img/heart.svg';
import useLocalStorage from './useLocalStorage';


export default function Heart({photo}) {
    const [liked, setLiked] = useLocalStorage(photo.url)
    

    return (
        <div onClick={() =>  {
            setLiked(!liked)
            let likedArray = JSON.parse(localStorage.getItem('heart')) ?? []
            if (likedArray.find(item => item.url===photo.url) === undefined) {
                likedArray.push(photo)
            } else {
                let index = likedArray.findIndex(item => item.url===photo.url)
                likedArray.splice(index, 1)
            }
            localStorage.setItem('heart', JSON.stringify(likedArray))
        }}>
            <img className="heart_icon" src={liked ? filledHeart : heart} alt="icon" />
        </div>
    )
}