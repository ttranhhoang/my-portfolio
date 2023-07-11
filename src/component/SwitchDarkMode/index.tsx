"use client";
import { useEffect, useState } from "react";

const SwitchDarkMode = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);

  function handleToggle(e: any) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setToggleTheme(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setToggleTheme(false);
    }
  }
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (toggleTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    if (currentTheme) {
      const isDarkTheme = currentTheme.includes("dark");
      document.documentElement.setAttribute("data-theme", currentTheme);
      setToggleTheme(isDarkTheme);
    }
  }, [toggleTheme]);
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={(e) => handleToggle(e)}
          checked={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default SwitchDarkMode;
