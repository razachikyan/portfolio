import { Main } from "../../components/main";
import { Header } from "../../components/header";
import CustomMap from "../../components/feature/map";
import { pageProps } from "../pageProps";

export const ContactsPage = ({ className }: pageProps): JSX.Element => {
  return (
    <div className={className}>
      <Header />
      <Main>
        <div
          style={{
            display: "flex",
            padding: "5rem",
            justifyContent: "space-evenly",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          }}
        ></div>
        <CustomMap />
      </Main>
    </div>
  );
};
