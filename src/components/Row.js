
import React, { useEffect } from "react";
import { getMovies } from "../api/api";
const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({ title, path, isLarge }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  

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

}

export default Row;