import { Image } from "../../../../components/shared/image";
import { Container } from "../../../../components/container";
import { experiences, formatDate } from "./mock";
import { IExperience } from "./types";
import { SectionTitle } from "../../sectionTitle";

import styles from "./styles.module.css";

export const Experience = (): JSX.Element => {
  return (
    <section className={styles.experience}>
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <div className={styles.box}>
          {experiences.map(
            ({ company, end, location, start, summary, logo, link }: IExperience) => {
              return (
                <div className={styles.item}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.main}
                  >
                    <Image
                      size={50}
                      className={styles.logo}
                      src={logo}
                      alt={company}
                    />
                    <h4 className={styles.name}>{company}</h4>
                  </a>
                  <span className={styles.date}>
                    {formatDate(start)} - {formatDate(end)}
                  </span>
                  <span className={styles.location}>{location}</span>
                  <p className={styles.descr}>{summary}</p>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
};
