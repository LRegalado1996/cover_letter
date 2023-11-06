import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import menuImg from "../../Assets/icons/menu.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to={"/"}>
            <h1>LR</h1>
          </Link>
        </div>
        <div className="menu">
          <img src={menuImg} alt="menu icon" onClick={toggleMenu} />
          <ul className={`menu-toggle ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to={"/SimpleFormPage"}>Simple form</Link>
            </li>
            <li>
              <Link to={"/ConnectWithExternalApiPage"}>
                Connect with external api
              </Link>
            </li>
            <li>
              <Link to={"/ReactKonvaPage"}>React-konva</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
