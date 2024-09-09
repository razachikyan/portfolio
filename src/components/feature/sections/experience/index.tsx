import { Container } from "../../../container";
import { experiences } from "./mock";
import { SectionTitle } from "../../sectionTitle";
import { GenericList } from "../../genericList";

import styles from "./styles.module.css";

export const Experience = (): JSX.Element => {
  return (
    <section id="experience" className={styles.experience}>
      <Container className={styles.container}>
        <SectionTitle>Experience</SectionTitle>
        <GenericList items={experiences} />
      </Container>
    </section>
  );
};
