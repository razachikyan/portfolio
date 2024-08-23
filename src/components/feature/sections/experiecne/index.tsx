import { Container } from "@/components/container";
import styles from "./styles.module.css";
import { experienceList } from "./mock";

export const Experience = (): JSX.Element => {
  return (
    <section className={styles.experience}>
      <Container className={styles.container}>
        {experienceList.map(({ company, end, location, start, summary }) => {
          return <div></div>;
        })}
      </Container>
    </section>
  );
};
