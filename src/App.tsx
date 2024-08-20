import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>{/* Sections */}</Main>
      <Footer />
    </div>
  );
}

export default App;
