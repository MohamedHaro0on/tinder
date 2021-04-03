import { useLayoutEffect, useState } from 'react'

// I use this component to get the updated window width and use it for layout purposes ;
// i have implemented it  as a custom hook to seprate the logic and make it resuable for other components;

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        let handleResize = () => setWidth(window.innerWidth);
        // geting the window inner width every time the window resizes ;
        window.addEventListener("resize", handleResize);
        // Cleaning Up;
        return () => window.removeEventListener("resize", handleResize);
    })

    return width;
}

export default useWindowWidth