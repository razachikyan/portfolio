import { Container } from "../../../../components/container";
import { experiences } from "./mock";
import { SectionTitle } from "../../sectionTitle";
import { GenericList } from "../../gelericList";

import styles from "./styles.css";

export const Experience = (): JSX.Element => {
  return (
    <section className={styles.experience}>
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <GenericList items={experiences} />
      </Container>
    </section>
  );
};
