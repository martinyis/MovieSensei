import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Logo from "./Logo";
import AuthBtn from "./AuthBtn";
import { selectIsAuth } from "../../redux/slices/auth";
import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";
import LogOut from "./LogOut";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isAuth = useSelector(selectIsAuth);
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
      <div className="block md:hidden h-[64px] bg-[#ffffff] w-[100%] px-5 lg:px-10">
        <div className="h-[100%] flex justify-between items-center mx-auto max-w-[1120px]">
          <Logo />
          <div className="flex gap-[48px] items-center">
            <ul className="flex gap-[48px]">
              <Link to="/">
                <li className="hover:text-[#E4D0D0]">Home</li>
              </Link>
              <Link to="/generation">
                <li className="hover:text-[#E4D0D0]">Generate</li>
              </Link>
              <Link to="/pricing">
                <li className="hover:text-[#E4D0D0]">Buy Credits</li>
              </Link>
            </ul>
            {isAuth ? <LogOut /> : <AuthBtn />}
          </div>
        </div>
      </div>
      <div className="hidden md:block h-[64px] bg-[#ffffff] w-[100%] px-10">
        <div className="absolute top-5">
          <Logo />
        </div>
        <div
          className={`flex-col gap-[48px] absolute left-1/2 transform ${
            navOpen ? "translate-y-[0%]" : "translate-y-[-100%]"
          } -translate-x-1/2 flex items-center pt-[100px] bg-secondary h-screen w-[100%]`}
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          <ul className="text-center text-2xl flex flex-col gap-10">
            <Link to="/" onClick={() => setNavOpen(false)}>
              <li className="hover:text-[#E4D0D0]">Home</li>
            </Link>
            <Link to="/generation" onClick={() => setNavOpen(false)}>
              <li className="hover:text-[#E4D0D0]">Generate</li>
            </Link>
            <Link to="/pricing" onClick={() => setNavOpen(false)}>
              <li className="hover:text-[#E4D0D0]">Buy Credits</li>
            </Link>
          </ul>
        </div>
        <div className={`absolute top-2 right-[60px]`}>
          {isAuth ? <LogOut /> : <AuthBtn />}
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
