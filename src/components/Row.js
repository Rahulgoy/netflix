import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      //console.log(res);
      return res;
    }
    fetchData();
  }, [fetchUrl]);
  //console.table(movies);

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          //console.log(url);
          var video_id = url.split("v=")[1];

          setTrailerUrl(video_id);
          /* var ampersandPosition = video_id.indexOf("&");
          if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
            console.log(video_id);
          }
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v")); */
        })
        .catch((error) => console.log(error));
    }
  };
  //console.log(trailerUrl);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
