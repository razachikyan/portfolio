import { Image } from "../../../../components/shared/image";
import { Container } from "../../../../components/container";
import { experiences, formatDate } from "./mock";
import { IExperience } from "./types";
import { SectionTitle } from "../../sectionTitle";

import styles from "./styles.module.css";
import { Box } from "../../box";
import { GenericList } from "../../gelericList";

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
