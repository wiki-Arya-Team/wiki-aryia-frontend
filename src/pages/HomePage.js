import React from "react";
import Slider from "../components/Slider";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import image from "../assets/rectangle.png";
import SearchBar from "../components/SearchBar";
import Profile from "../components/Profile";
const cards = [
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
  {
    title: "test",
    author: "john",
    desc: "testing article ",
    img: image,
  },
];
const HomePage = () => {
  return (
    <div className="home">
      <Slider />

      <Profile className={"home__sidebar-left"} />
      <SearchBar />

      <div className="home__cards-container">
        {cards.map((props, i) => {
          return <Card {...props} key={i} />;
        })}
      </div>
      <SideBar className={"home__sidebar-right"} />
    </div>
  );
};

export default HomePage;
