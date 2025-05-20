import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Questions from "./Questions";
import Page from "./Page";
import Footer from "../global/Footer";

const HomePage = () => {
  const [category, setCategory] = useState();
  const [categoryImg, setCategoryImg] = useState();
  const APIKEY = "e5abb4f727c7699e16a2b3264e01d9df";
  const movieCategoryAPI = "https://api.themoviedb.org/3/genre/movie/list";
  const movieCategoryImg = "https://api.themoviedb.org/3/discover/movie";
  useEffect(() => {
    async function showCategories() {
      const res = await fetch(movieCategoryAPI + "?api_key=" + APIKEY);
      const data = await res.json();
      setCategory(data.genres);
    }
    async function showCategoryImg() {
      const res = await fetch(movieCategoryImg + "?api_key=" + APIKEY);
      const data = await res.json();
      setCategoryImg(data);
    }
    showCategories();
    showCategoryImg();
  }, []);
  return (
    <div className="bg-[#0f0f0f]">
      <Hero />
      {category && categoryImg && (
        <Explore category={category} categoryImg={categoryImg} />
      )}
      <Experiences />
      <Questions />
      <Page />
      <Footer />
    </div>
  );
};

export default HomePage;
