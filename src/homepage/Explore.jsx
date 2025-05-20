import React, { useState, useRef, useEffect } from "react";
import Text from "../global/Text";
import Card from "../global/Card";

const Explore = ({ category, categoryImg }) => {
  const [scrollPercent, setScrollPercent] = useState(10);
  const scrollRef = useRef(null); // ref to track the scrollable container

  const catImg = categoryImg.results;
  const usedMovieId = new Set();

  const genres = category.map((genre) => {
    const movieImg = catImg.find(
      (movie) =>
        movie.genre_ids.includes(genre.id) && !usedMovieId.has(movie.id)
    );

    if (movieImg) {
      usedMovieId.add(movieImg.id);
    }
    return {
      genreName: genre.name,
      id: genre.id,
      image: movieImg ? movieImg.poster_path : "",
    };
  });

  // Handle scroll event
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const percent = (scrollLeft / maxScrollLeft) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="px-5 pb-5 h-[70vh] flex flex-col justify-between items-center">
      <Text
        title="Explore our wide variety of categories"
        textTitle="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        textAlign="text-start"
      />

      {/* Scrollable cards container */}
      <div
        ref={scrollRef}
        className="w-full h-3/5 overflow-x-auto overflow-y-hidden"
      >
        <div className="flex gap-4 w-max">
          {genres.map((genre) =>
            genre.image ? (
              <Card key={genre.id} className="w-[70vw] bg-[#181818] p-4">
                <img
                  className="h-48 w-full object-cover rounded-lg mb-3"
                  src={`https://image.tmdb.org/t/p/w500${genre.image}`}
                  alt={genre.genreName}
                />
                <h2 className="py-2 font-medium text-lg">{genre.genreName}</h2>
              </Card>
            ) : null
          )}
        </div>
      </div>

      {/* Custom scroll progress bar */}
      <div className="w-28 h-2.5 bg-neutral-600 rounded-full relative mt-3">
        <div
          className="h-2.5 bg-red-600 rounded-full absolute top-0 left-0 transition-all duration-200"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Explore;
