import React from "react";
import Dropdown from "./Dropdown";

const Search = () => {
  // return <div className="search header__search">
  return (
    <form action="#" className="search header__search">
      <label htmlFor="searchInput" hidden>
        search input
      </label>
      <input
        type="text"
        id="searchInput"
        name="searchInput"
        className="search__input"
        placeholder="Search..."
      />

      <button type="submit" className="search__submit">Search</button>
    </form>
  );
  // </div>
};

const Languages = () => {
  return <form action="#" className="lang header__lang">

  </form>;
};

const langs = [
  "languages",
  "english",
  "persian"
]
const modes = [
  "write",
  "write a preview",
  "add places",
  "contribute"
]
const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">logo</div>
      <div className="header__page">Home</div>
      {/* <div className="header__search">search</div> */}
      <Search />
      {/* <div className="header__add-content">Write</div> */}

      <Dropdown dropItems={modes
      } className={"header__add-content"}/>
      
      <Dropdown dropItems={langs} className={"header__lang"}/>
      {/* <div className="header__lang">Languages</div> */}
      <div className="header__login">Sign Up /Login</div>
      <div className="header__avatar">WA</div>
    </header>
  );
};

export default Navbar;
