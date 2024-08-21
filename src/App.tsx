import { useEffect } from "react";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { useTheme } from "./contexts/ThemeContext";

import "./App.css";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Header />
      <Main>{/* Sections */}</Main>
      <Footer />
    </div>
  );
}

export default App;
