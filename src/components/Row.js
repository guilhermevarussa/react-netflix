
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { getMovies } from "../api/api";
import "./Row.css";

const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({ title, path, isLarge }) {
    const [movies, setMovies] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState("")
    const handleOnClick = (movie) => {
        //pegar a url do trailer

        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            setTrailerUrl('https://www.youtube.com/watch?v=sOijqHXbjxk&list=WL&index=8&t=11s&ab_channel=pasquadev')
        }

    }
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            console.log("data? ", data);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies error: ", error);
        }
    };

    useEffect(() => {
        fetchMovies(path);
    }, [path]);

    return (
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {movies?.map(movie => {
                    return <img
                        className={`movie-card ${isLarge && "movie-card-large"}`}
                        onClick={() => handleOnClick(movie)}
                        key={movie.id}
                        src={`${imageHost}${movie.poster_path}`}
                        alt={movie.name}>
                    </img>

                })}
            </div>
            {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
        </div>
    )

}

export default Row;