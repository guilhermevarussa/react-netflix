import React from 'react';
import categories, { getMovies } from '../api/api';
import "./Banner.css";

function Banner() {
    const [movie, setMovies] = React.useState({});
    const fetchRandomMovie = async (_path) => {

        try {

            const netflixOriginalsCategory = categories.find(
                (categories) => categories.name === "netflixOriginals"
            );

            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randowIndex = Math.floor(Math.random() * data.results.length);
            setMovies(movies[randowIndex]);

        } catch (error) {
            console.log("Banner fetchRandomMovie error", error)

        }

    };

    useEffect(() => { }, []);


    return (
        <div>Banner</div>
    )
}

export default Banner
