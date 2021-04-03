import TinderCard from 'react-tinder-card'
import { createRef, useContext, useState } from "react";
import { Context } from "../Context/Context";

// the material ui imports;
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import ClearIcon from '@material-ui/icons/Clear';

import ClassNames from "./TinderCards.module.css";

const Card = ({ url, title, id }) => {

    const { handleLikedCard, handleDisLikedCards } = useContext(Context);
    const [swipeDirection, setSwapDir] = useState(null);
    const CardRef = createRef(null);

    const CardLeftScreen = (person, dir) => {
        dir === "left" ? handleDisLikedCards(person) : handleLikedCard(person)
    }

    const onSwipe = (string) => {
        setSwapDir(string);
    }

    const handleControls = (dir) => {
        CardRef.current.swipe(dir);
    }

    const CardControls = [
        { icon: <ClearIcon fontSize="large" />, ariaLabel: "Cancel", className: ClassNames.Cancel, dir: "left" },
        { icon: <StarIcon fontSize="large" />, ariaLabel: "SuperLike", className: ClassNames.Star, dir: "up" },
        { icon: <FavoriteIcon fontSize="large" />, ariaLabel: "Like", className: ClassNames.Heart, dir: "right" },
    ]
    return (
        <TinderCard
            preventSwipe={["down"]}
            className={ClassNames.Swipe}
            onSwipe={(string) => onSwipe(string)}
            onCardLeftScreen={(dir) => CardLeftScreen({ title, id, url }, dir)}
            ref={CardRef}
        >
            <article
                className={ClassNames.TinderCard}
                style={{ backgroundImage: `url(${url})` }}
                aria-label={title}
            >

                <SwipeCaption dir={swipeDirection} />

                <div className={ClassNames.Info}>
                    <p className={ClassNames.Description}>{title}</p>
                    <div className={ClassNames.Controls}>
                        {CardControls.map(({ icon, ariaLabel, className, dir }, index) => {
                            return (
                                <IconButton onClick={() => handleControls(dir)} aria-label={ariaLabel} key={index} className={className}>
                                    {icon}
                                </IconButton>
                            )
                        })}
                    </div>
                </div>
            </article>
        </TinderCard>
    )
}
export default Card;


const SwipeCaption = ({ dir }) => {
    let Caption = null;
    switch (dir) {
        case ("right"): {
            Caption = (<p className={ClassNames.Like}>  Like  </p>);
            break;
        }
        case ("up"): {
            Caption = (<p className={ClassNames.SuperLike}>  super Like </p>);
            break;
        }
        case ("left"): {
            Caption = (<p className={ClassNames.Nope}> Nope </p>);
            break;
        }
        default: {
            Caption = null;
        }
    }
    return (
        <>{Caption}</>
    )
}