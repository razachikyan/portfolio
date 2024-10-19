import { ExternalLink } from "../externalLink";
import styles from "./styles.module.css";

export const PersonalData = () => {
  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <span className={styles.firstName}>Razmik</span>
        <span className={styles.lastName}>Achikyan</span>
        <h1 className={styles.title}>Front-End Developer</h1>
      </div>
      <div className={styles.references}>
        <span className={styles.label}>References</span>
        <ExternalLink
          label="Github"
          href="https://github.com/razachikyan/"
          className={styles.ref}
        />
        <ExternalLink
          label="Linkedin"
          href="https://www.linkedin.com/in/razmik-achikyan/"
          className={styles.ref}
        />
      </div>
    </div>
  );
};
