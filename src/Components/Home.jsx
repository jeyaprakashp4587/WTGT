/** @format */

import React, { useEffect, useRef } from "react";
import "./home.css";
import logo from "../assets/Rynex.png";

export const Home = () => {
  // dynamic letter
  const dynamic_word = ["Grow", "2x Faster", "Success"];
  useEffect(() => {
    const dynamic = document.getElementById("dynamic");
    let index = 0;
    const interval = setInterval(() => {
      dynamic.innerText = dynamic_word[index];
      index = (index + 1) % dynamic_word.length;
    }, 3000);
    return () => clearInterval(interval);
  });
  //
  // scroll event
  window.addEventListener("scroll", () => {
    const header = document.getElementById("home-header");
    const scrolled = window.scrollY;
    if (scrolled >= 500) {
      header.classList.add("header-fixed");
    }
    if (scrolled <= 500) {
      header.classList.remove("header-fixed");
    }
  });
  //
  const Load = () => {
    const layer = document.getElementById("layer");
    setTimeout(() => {
      layer.style.width = "0%";
      layer.style.transition = "width .5s";
    }, 200);
  };
  //
  // menu
  const menu = useRef();

  const HandleMenu = () => {
    if (menu.current) {
      menu.current.style.right = "0";
    }
  };
  const HandleClose = () => {
    if (menu.current) {
      menu.current.style.right = "-500px";
    }
  };
  //
  return (
    <div className="home-wrapper" onLoad={() => Load()} id="home">
      {/* onload layer */}
      <div className="onload-layer" id="layer"></div>
      {/* home header */}
      <div className="home-header container m-auto" id="home-header">
        <div className="logo">
          <img src={logo} alt="her"/>
        </div>
        {/*  */}
        <i
          id="bars"
          class="fa fa-bars"
          aria-hidden="true"
          onClick={() => HandleMenu()}
        ></i>
        {/*  */}
        <nav ref={menu}>
          <i
            id="times"
            class="fa fa-times"
            aria-hidden="true"
            onClick={() => HandleClose()}
          ></i>

          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            {" "}
            <li>About Us</li>
          </a>
          <a href="#work">
            {" "}
            <li>Services</li>
          </a>
          <a href="#support">
            {" "}
            <li>Features</li>
          </a>
          <a href="#contact">
            <li>Contact Us</li>
          </a>
          <a href="#contact">
            <li id="know">Know Us</li>
          </a>
        </nav>
      </div>
      {/* home content */}
      <div className="home-content container  ">
        <div className="home-content-left">
          <h1>Build a Web/App</h1>
          <h1>that makes you get</h1>
          <h3 id="dynamic">Sucess</h3>
          <a href="#cdf">
            <button>Explore</button>
          </a>
        </div>
        <div className="home-content-right ">
          <img
            id="main-hero"
            src="https://i.ibb.co/WgqsrbG/64e5950c1b496.png"
            alt=""
          />
        </div>

        <i
          onClick={() =>
            (window.location.href = " https://wa.me/message/6NF3SS3SXRUUM1")
          }
          class="fa-brands fa-whatsapp"
          id="whats-app"
        ></i>

        {/* */}
      </div>
    </div>
  );
};
