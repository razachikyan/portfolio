import { About } from "../../components/feature/sections/about";
import { Promo } from "../../components/feature/sections/promo";
import { Experience } from "../../components/feature/sections/experience";
import { Footer } from "../../components/feature/footer";
import { Header } from "../../components/feature/header";
import { Main } from "../../components/feature/main";
import { Education } from "../../components/feature/sections/education";
import { Carousel } from "../../components/feature/carousel";
import { skillsData } from "./mock";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <Promo />
        <About />
        <Experience />
        <Carousel skills={Object.values(skillsData).flat()} />
        <Education />
      </Main>
      <Footer />
    </>
  );
};