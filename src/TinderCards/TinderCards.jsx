import { useContext } from "react";
import Loader from "../Components/Loader/Loader";
import ClassNames from "./TinderCards.module.css";
import { Context } from "../Context/Context";
import Card from "./Card";

const TinderCards = () => {
    const { loading, providedPeople } = useContext(Context);
    console.log("The Provided People" , providedPeople , loading);
    if (loading && !providedPeople) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <div className={ClassNames.TinderContainer}>
                {providedPeople.map((element) => {
                    return (
                        <Card {...element} key={element.id} />
                    )
                })}
            </div>
        )
    }

}
export default TinderCards;