import { Link } from "react-router-dom";
import ClassNames from './PrevCards.module.css';
import { useContext } from "react";
import { Context } from "../Context/Context";


const renderCards = (data) => {
    return (
        <div className={ClassNames.PrevCardContainer}>
            {data.map(({ url, id, title }) => {
                return (
                    <Link key={id} to="">
                        <img src={url} width="100" alt={title} />
                    </Link>
                )
            })}
        </div>
    )
}


const PrevCards = (props) => {

    let { pathname } = props.history.location
    const { liked, disLiked } = useContext(Context);

    // if the route is equal to liked then it will display the liked list;
    if (liked.length > 0 && pathname === "/liked") {
        return (
            <article className = {ClassNames.PrevCardsContainer}>
                <h2> Likes </h2>
                {renderCards(liked)}
            </article>
        )
    }
    // if the route is equale to disliked it will display the disliked list;
    else if (disLiked.length > 0 && pathname === "/disliked") {
        return (
            <article className = {ClassNames.PrevCardsContainer}>
                <h2> DisLikes </h2>
                {renderCards(disLiked)}
            </article>
        )

    }
    // if the liked and disliked are empty ;
    else if (liked.length === 0 || disLiked.length === 0) {
        return (
            <article className = {ClassNames.NoCards}>
                <h3> you havenot {pathname.substring(1)} any one  yet
                    <Link to="/" aria-label="to Home page"> Let's Start !! </Link>
                </h3>
            </article>
        )
    }
}

export default PrevCards;