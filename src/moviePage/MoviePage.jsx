import React, { useEffect, useState } from "react";
import Suggest from "./Suggest";
import MovieShow from "./MovieShow";
import Explore from "../homepage/Explore";

const MoviePage = () => {
  const [suggestedMovies, setSuggestedMovies] = useState();
  const APIKEY = "e5abb4f727c7699e16a2b3264e01d9df";
  const movieCategoryAPI = "https://api.themoviedb.org/3/genre/movie/list";
  const movieCategoryImg = "https://api.themoviedb.org/3/discover/movie";
  useEffect(() => {
    fetch(movieCategoryImg + "?api_key=" + APIKEY)
      .then((res) => res.json())
      .then((data) => setSuggestedMovies(data.results));
  });
  return (
    <div className={`bg-[#0f0f0f] px-5`}>
      {suggestedMovies && <Suggest suggestedMovies={suggestedMovies} />}
      <MovieShow />
      <Explore />
    </div>
  );
};

export default MoviePage;
