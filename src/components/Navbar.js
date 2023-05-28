import React, { useEffect, useState } from "react";
import p1 from "../assetes/p1.jpg";
import p2 from "../assetes/p2.jpg";
import p3 from "../assetes/p3.jpg";
import p4 from "../assetes/p4.jpg";
import shoping from "../assetes/shop1.jpg";

const Navbar = () => {
  const [sideActive, setSideActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [new1, setNew1] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);
  const [shop, setShop] = useState(false);
  const [title, setTitle] = useState();
  useEffect(() => {
    //  sideActive("");
  }, [title, sideActive, sidebarActive]);
  const sideBareClick1 = () => {
    setSideActive(true);
  };
  const sideBareClick2 = () => {
    setSideActive(false);
  };
  function activeSide(data) {
    setTitle(data);
    if (data === "new") {
      setTitle(data);
      setNew1(true);
    } else if (data === "pages") {
      setTitle(data);
      setPage(true);
    } else if (data === "shop") {
      setTitle(data);
      setShop(true);
    } else {
      setTitle(data);
      setBlog(true);
    }
    setSidebarActive(true);
  }
  const unActiveSide = () => {
    setTitle("");
    setNew1(false);
    setBlog(false);
    setShop(false);
    setPage(false);
    setSidebarActive(false);
  };
  return (
    <header className="header">
      <div className="containe">
        <div className="row1 v-center">
          <div className="header-item item-left">
            <div className="logo">
              <a style={{ color: "blue" }} href="#/">
                Wikyarya
              </a>
            </div>
          </div>

          <div className="header-item item-center">
            <div
              onClick={sideBareClick2}
              className={`menu-overlay ${sideActive ? "active" : ""} `}
            ></div>
            <nav className={`menu ${sideActive ? "active" : ""}`}>
              <div
                className={`mobile-menu-head ${sidebarActive ? "active" : " "}`}
              >
                <div onClick={unActiveSide} className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title">{title}</div>
                <div onClick={sideBareClick2} className="mobile-menu-close">
                  &times;
                </div>
              </div>
              <ul className="menu-main">
                <li>
                  <a href="#/">Home</a>
                </li>
                <li>
                  <a href="#/">Blog</a>
                </li>
                <li>
                  <a href="#/">About us</a>
                </li>
                <li>
                  <a href="#/">New post</a>
                </li>
                <li>
                  <a href="#/">Join us</a>
                </li>

                <li>
                  <a href="#/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-item item-right">
            <a href="#/">
              <i class="fas fa-sign-in-alt"></i>
            </a>
            <a href="#/">
              <i className="fas fa-user"></i>
            </a>
            <div onClick={sideBareClick1} className="mobile-menu-trigger">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
