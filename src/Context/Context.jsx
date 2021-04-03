// this is like the data store for the project it handles the disliked , liked and all cards for evrey component accross the project;

import { createContext, useState, useEffect } from "react";
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/photos";


const Context = createContext(null);
const { Provider } = Context;


const PeopleContext = (props) => {

    const [loading, setLoading] = useState(false);

    const [people, setPeople] = useState([]);

    const [liked, setLiked] = useState([]);
    const [disLiked, setDisliked] = useState([]);

    // the amount of cards rendered to the page;
    const [providedPeople, setProvidedPeople] = useState([]);
    const [pointer, setPointer] = useState(20);
    // the use effect runs only once when the component renders to the screen ;
    useEffect(() => {
        FetchPeople();
    },[])

    // Fetching the Data from the provided URL ;
    const FetchPeople = () => {
        setLoading(true)
        axios.get(URL).then((res) => {
            setPeople(res.data);
            setProvidedPeople(res.data.slice(0, pointer))
            setPointer(prevState=> prevState+20);
            console.log("the pointer in the use effect", pointer);
        }).catch((err) => {
            console.log("the Error ", err);
        }).then(() => {
            setLoading(false);
        })
    }

    // evrey time the user swips a card this function is called 
    // it filters the swiped elmenet and deletes it from the state ;
    // also it pushes anathor element at the end ;
    const handleRemovingCard = (id) => {
        setProvidedPeople(prevState => {
            if (prevState.length!==1){
                return [...prevState.filter(person => person.id !== id)]
            }
            else {
                setProvidedPeople(prevState=>{
                    return [...people.slice(pointer-20,pointer)]
                })
                setPointer(prevState=>{
                    console.log("the prevState", prevState);
                    return prevState + 20 ;
                })
  
            }
        });
    }


    // handles the Liked Card List;
    const handleLikedCard = (person) => {
        setLiked(prevState => [...prevState, { ...person }]);
        handleRemovingCard(person.id);
    }

    // Handles the DisLiked Cards List;
    const handleDisLikedCards = (person) => {
        setDisliked(prevState => [...prevState, { ...person }]);
        handleRemovingCard(person.id);
    }


    // this passed to the TinderCards Component;
    // due to the huge amount of data it makes sure that there are 10 card rendered at any time;

    return (
        <Provider
            value={{ loading, providedPeople, handleRemovingCard, liked, handleLikedCard, disLiked, handleDisLikedCards }} {...props}>
            {props.children}
        </Provider>
    )
}


export { PeopleContext, Context };