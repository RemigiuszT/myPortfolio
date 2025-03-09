"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PortfolioMenu from "../../header/PortfolioMenu";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-four ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-center">
          <PortfolioMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
