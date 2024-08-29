import { Container } from "../container";
import { Logo } from "../feature/Logo";
import { Nav } from "../feature/nav";
import { ThemeToggle } from "../feature/themeToggle";
import styles from "./styles.css";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.left}>
          <Nav
            className={styles.nav}
            itemClassName={styles.item}
            items={["About me", "Resume", "Portfolio", "Contact"]}
          />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
