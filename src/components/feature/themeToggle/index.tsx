import { Button } from "../../../components/shared/button";
import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./styles.module.css";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <Button className={styles.button} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </Button>
  );
};
