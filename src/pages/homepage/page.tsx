import { About } from "../../components/feature/sections/about";
import { Promo } from "../../components/feature/sections/promo";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <Promo />
        <About />
      </Main>
      <Footer />
    </>
  );
};