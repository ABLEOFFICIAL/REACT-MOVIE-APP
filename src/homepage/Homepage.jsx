import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Questions from "./Questions";
import Page from "./Page";
import Footer from "../global/Footer";
import SideBar from "../global/SideBar";

const HomePage = () => {
  const [category, setCategory] = useState();
  const [categoryImg, setCategoryImg] = useState();
  const [showSide, setShowSide] = useState(false);
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
    // console.log(window);
  }, []);
  // toggle side bar
  function handleClick() {
    setShowSide(!showSide);
  }
  function removeSide() {
    setShowSide(!showSide);
  }
  return (
    <div className="bg-[#0f0f0f] relative">
      <Hero handleClick={handleClick} />
      <SideBar showSide={showSide} removeSide={removeSide} />
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
