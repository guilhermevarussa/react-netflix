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


    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
      }

    return (
        <header
            className="banner-container"
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

                <div className='banner-button-container'>
                    <button className="banner-button">Watch</button>
                    <button className="banner-button">My List</button>
                </div>

                <div className='banner-description'>
                    <h2>{truncate (movie?.overview, 150)}</h2>
                </div>

            </div>
        </header>
    );
}

export default Banner;
