import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = (props) => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
