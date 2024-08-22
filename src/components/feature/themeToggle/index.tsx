import { useEffect } from "react";
import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./styles.module.css";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  // State to manage the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme-light";
    setTheme(savedTheme);
  }, []);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light"}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
