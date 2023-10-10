"use client";
import Image from "next/image";
import Logo from "../../AssestImage";
import Ham from "../../AssestImage";
import Img from "../../AssestImage";
import React, { useState, useEffect } from "react";
import style from "../navbar/navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 0) {
        setScrolled(true);
      } else if (scrolled && window.scrollY === 0) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className={`${style.navbar} ${scrolled && style["fixed-navbar"]}`}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image src={Logo.logo} />
        </div>

        <div className={style["menu-icon"]} onClick={handleShowNavbar}>
          <Image src={Ham.hambergar} />
        </div>
        <div
          className={`${style["nav-elements"]} ${showNavbar && style.active}`}
        >
          <ul>
            <li>
              <Link href="/blog">FITNESS</Link>
            </li>
            <li>
              <Link href="/projects">WELLNESS</Link>
            </li>
            <li>
              <Link href="/about">ACADEMY</Link>
            </li>
            <li>
              <Link href="/contact">GALLERY</Link>
            </li>
          </ul>
          <div className={style["nav-btn"]}>
            <button>GET APP</button>
            <Image src={Img.user} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
