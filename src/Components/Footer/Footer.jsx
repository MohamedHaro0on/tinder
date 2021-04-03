import { useState } from "react";
import ClassNames from "./Footer.module.css";

// meterial ui imports:
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from "@material-ui/core/Button";


const Footer = () => {
    const [hidden, setHide] = useState(true);
    const Icons = [
        { icon: <KeyboardBackspaceIcon />, title: "Nope ", id: 1 },
        { icon: <ArrowRightAltIcon />, title: "like ", id: 2 },
        { icon: <ArrowUpwardIcon />, title: "SuperLike ", id: 3 },
    ]
    const handleFooterToggler = () => {
        setHide(pervState => !pervState);
    }
    return (
        <footer className={ClassNames.Footer}>
            <Button onClick={() => handleFooterToggler()} variant="contained">
                {hidden ? "Show" : "Hide"}
            </Button>

            <ul className={hidden ? ClassNames.Hide : ClassNames.Show}>
                {Icons.map(({ icon, title, id }) => {
                    return (
                        <li key={id}>
                            <span>{icon}</span>
                            <span>{title}</span>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}

export default Footer
