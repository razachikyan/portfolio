import { Main } from "../../components/main";
import { Header } from "../../components/header";
import CustomMap from "../../components/feature/map";

export const ContactsPage = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};
