import { Link } from "react-router-dom";
import ClassNames from './PervCards.module.css';
import { useContext } from "react";
import { Context } from "../Context/Context";


const renderCards = (data) => {
    return (
        <article className={ClassNames.PrevCardContainer}>
            {data.map(({ url, id, title }) => {
                return (
                    <Link key={id} to="">
                        <img src={url} width="100" alt={title} />
                    </Link>
                )
            })}
        </article>
    )
}
const PervCards = (props) => {

    let { pathname } = props.history.location
    const { liked, disLiked } = useContext(Context);

    // if the route is equal to liked then it will display the liked list;
    if (liked.length > 0 && pathname === "/liked") {
        return renderCards(liked)
    }
    // if the route is equale to disliked it will display the disliked list;
    else if (disLiked.length > 0 && pathname === "/disliked") {
        return renderCards(disLiked)
    }
    // if the liked and disliked are empty ;
    else if (liked.length === 0 || disLiked.length === 0) {
        return (
            <article>
                <h3> you havenot {pathname.substring(1)} any one  yet
                    <Link to="/" aria-label="to Home page"> Let's Start !! </Link>
                </h3>
            </article>
        )
    }
}

export default PervCards;