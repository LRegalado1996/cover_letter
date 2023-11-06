import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import menuImg from "../../Assets/icons/menu.png";

const defaultMenuOptions = [
  {
    name: "Simple form",
    url: "/SimpleFormPage",
    selected: false,
  },
  {
    name: "Connect with external api",
    url: "/ConnectWithExternalApiPage",
    selected: false,
  },
  {
    name: "React-konva",
    url: "/ReactKonvaPage",
    selected: false,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuOptions, setMenuOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOptions(defaultMenuOptions);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (key) => {
    const currentMenuOptions = menuOptions.map((option, k) => ({
      ...option,
      selected: k === key,
    }));
    navigate(currentMenuOptions[key].url);
    setMenuOptions(currentMenuOptions);
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate("/");
    setMenuOptions(defaultMenuOptions);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="logo" onClick={() => navigateToHome()}>
          <h1>LR</h1>
        </div>
        <div className="menu">
          <img src={menuImg} alt="menu icon" onClick={toggleMenu} />
          <ul className={`menu-toggle ${isMenuOpen ? "open" : ""}`}>
            {menuOptions.length > 0 &&
              menuOptions.map((option, key) => (
                <li
                  key={"option" + key}
                  className={option.selected ? "selected" : ""}
                  onClick={() => navigateTo(key)}
                >
                  {option.name}
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
