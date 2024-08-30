import { About } from "../../components/feature/sections/about";
import { Promo } from "../../components/feature/sections/promo";
import { Experience } from "../../components/feature/sections/experiecne";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Education } from "../../components/feature/sections/education";
import { Carousel } from "../../components/feature/carousel";
import { skillsData } from "./mock";
import { pageProps } from "../pageProps";

export const HomePage = ({ className }: pageProps): JSX.Element => {
  return (
    <div className={className}>
      <Header />
      <Main>
        <Promo />
        <About />
        <Experience />
        <Carousel skills={skillsData} />
        <Education />
      </Main>
      <Footer />
    </div>
  );
};