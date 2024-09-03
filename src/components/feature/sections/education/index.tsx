import { Container } from "../../../../components/container";
import styles from "./styles.module.css";
import { SectionTitle } from "../../sectionTitle";
import { Box } from "../../box";
import { GenericList } from "../../gelericList";
import { education } from "./mock";

export const Education = () => {
  return (
    <section className={styles.education}>
      <Container className={styles.container}>
        <SectionTitle>Education</SectionTitle>
        <Box className={styles.box}>
            <GenericList items={education} />
        </Box>
      </Container>
    </section>
  );
};
