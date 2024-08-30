import { Container } from "../../../../components/container";
import { SectionTitle } from "../../sectionTitle";
import { Box } from "../../box";
import { GenericList } from "../../gelericList";
import { education } from "./mock";

import styles from "./styles.module.css";

export const Education = () => {
  return (
    <section className={styles.education}>
      <Container>
        <SectionTitle>Education</SectionTitle>
        <Box className={styles.box}>
          <GenericList items={education} />
        </Box>
      </Container>
    </section>
  );
};
