
import { useEffect, useState } from "react";

const useStar1warsFilmData = (movieId) => {
    const [data, setData] = useState(null);

    const fetchStarWarsFilmData = async () => {
        const response = await fetch(`https://swapi.dev/api/films/${movieId}/`);
        const json = await response.json();
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log(json);
        setData(json);
    };

    useEffect(() => {
         fetchStarWarsFilmData();
    }, []);

    return {data};

}

export default  useStar1warsFilmData;