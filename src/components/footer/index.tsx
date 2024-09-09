import { Container } from "../container";
import { social } from "./mock";

import styles from "./styles.module.css";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {social.map(({ name, link }, i) => (
            <li className={styles.item} key={i}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
        <span className={styles.rights}>© 2024 All Rights Reserved.</span>
      </Container>
    </footer>
  );
};
