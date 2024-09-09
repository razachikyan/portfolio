import { Footer } from "../../components/footer";
import { Contacts } from "../../components/feature/sections/contacts";
import { Header } from "../../components/header";

export const ContactsPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Contacts />
      <Footer />
    </>
  );
};
