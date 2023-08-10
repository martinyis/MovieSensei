import React from "react";
import GithubIcon from "./../../assets/icons/github-icon.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1320px] flex md:flex-col  gap-[20px] md:justify-center justify-between items-center h-[100px] mb-[50px] px-10">
      <p>© 2023 All rights reserved</p>
      <ul className="flex items-center xs:gap-[15px] gap-[37px] text-[16px] ">
        <Link to="/terms">
          <li className="hover:text-[#610094] cursor-pointer">Terms</li>
        </Link>
        <Link to="/privacy">
          <li className="hover:text-[#610094] cursor-pointer">Privacy</li>
        </Link>
        <Link to="/cookies">
          <li className="hover:text-[#610094] cursor-pointer">Cookies</li>
        </Link>
      </ul>
      <div className="flex items-center gap-[13px] xs:flex-col">
        <a
          href="mailto:martinyis11@gmail.com"
          className="text-[16px] hover:text-[#610094] cursor-pointer"
        >
          martinyis11@gmail.com
        </a>
        <a href="https://github.com/martinyis">
          <div className="p-[10px] bg-[#000000] rounded-[50px] cursor-pointer">
            <img src={GithubIcon} alt="" />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
