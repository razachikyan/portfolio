import { ICarouselProps } from "./types";
import { SectionTitle } from "../sectionTitle";
import { Image } from "../../../components/shared/image";

import styles from "./styles.module.css";

export const Carousel = ({ skills }: ICarouselProps) => {
  return (
    <div className={styles.carousel}>
      <SectionTitle className={styles.title}>Skills</SectionTitle>
      <ul style={{ width: skills.length * 600 }} className={styles.list}>
        {[...skills, ...skills].map((skill) => (
          <div className={styles.skill}>
            <span>{skill.name}</span>
            <Image src={skill.logo} size={50} alt={skill.name} />
          </div>
        ))}
      </ul>
    </div>
  );
};
