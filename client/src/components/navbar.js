import React from "react";
import { useDarkMode } from "../hooks/darkMode";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav data-testid ='navbar' className="navbar">
      <h1>TennisPlayer Data</h1>
      <div className="dark-mode_toggle">
        <div
          data-testid='onclick' onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
