
// material ui imports:
import PersonIcon from '@material-ui/icons/Person';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import StarIcon from '@material-ui/icons/Star';
import AppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
// end;

import { NavLink } from "react-router-dom";
import ClassNames from "./Header.module.css"

let Routes = [
    {
        url: "/", id: 1, ariaLabel : "to home" ,icon:
            (<svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                focusable="false"
                aria-hidden="true"
                alt="Tinder Logo"
                role="presentation">
                <path 
                    d={`M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 
                        8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z`}
                    fillRule="nonzero">
                </path>
            </svg>)
    },
    { url: "liked", id: 2, icon: <StarIcon /> , ariaLabel:"to Liked page"},
    { url: "disliked", id: 3, icon: <ThumbDownIcon /> , ariaLabel : "to disLiked Page"},
    { url: "profile", id: 4, icon: <PersonIcon /> , ariaLabel : "to Profile Page"}
]
const Header = () => {
    return (
        <AppBar position="fixed" className={ClassNames.Header}>
            <nav>
                <ul className={ClassNames.Routes}>
                    {Routes.map(({ url, icon, id , ariaLabel}) => {
                        return (
                            <li key={id}>
                                <NavLink to={`${url}`} activeClassName={ClassNames.Active} aria-label={`to ${url}`}>
                                    <IconButton aria-label = {ariaLabel}>{icon}</IconButton>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </AppBar>
    )
}

export default Header