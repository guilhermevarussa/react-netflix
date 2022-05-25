import React, { useEffect } from 'react';
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

    useEffect(() => {

        fetchRandomMovie();

    }, []);


    return (
        <header
            className="banner-content"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                roundPosition: "center-center",
            }}
        >

            <div className="banner-content">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
            </div>

        </header>
    );
}

export default Banner;
