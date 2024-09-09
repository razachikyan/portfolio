import { Container } from "../../../../components/container";
import styles from "./styles.module.css";
import { SectionTitle } from "../../sectionTitle";
import { GenericList } from "../../genericList";
import { education } from "./mock";

export const Education = () => {
  return (
    <section id='education' className={styles.education}>
      <Container className={styles.container}>
        <SectionTitle>Education</SectionTitle>
        <GenericList items={education} />
      </Container>
    </section>
  );
};
