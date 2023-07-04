import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Logo from "./Logo";
import AuthBtn from "./AuthBtn";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (navOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [navOpen]);

  return (
    <div>
      <div className="block md:hidden h-[64px] bg-[#ffffff] w-[100%]">
        <div className="h-[100%] flex justify-between items-center mx-auto max-w-[1120px]">
          <Logo />
          <div className="flex gap-[48px] items-center">
            <ul className="flex gap-[48px]">
              <li>Home</li>
              <li>Generate</li>
              <li>Buy Credits</li>
            </ul>
            <AuthBtn />
          </div>
        </div>
      </div>
      <div className="hidden md:block h-[64px] bg-[#ffffff] w-[100%]">
        <div
          className={`flex-col gap-[48px] absolute left-1/2 transform ${
            navOpen ? "translate-y-[0%]" : "translate-y-[-100%]"
          } -translate-x-1/2 flex items-center pt-[100px] bg-secondary h-screen w-[100%]`}
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          <ul className="text-center text-2xl flex flex-col gap-10">
            <li>Home</li>
            <li>Generate</li>
            <li>Buy Credits</li>
          </ul>
          <AuthBtn />
        </div>
        <div className="md:block hidden z-10 mr-4 absolute top-2 right-0">
          <Hamburger
            toggled={navOpen}
            toggle={toggleNav}
            duration={0.3}
            easing="ease-in"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;