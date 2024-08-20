import { Container } from "../container";
import { Logo } from "../feature/Logo";
import { Nav } from "../feature/nav";
import { ThemeToggle } from "../feature/themeToggle";
import styles from "./styles.module.css";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
        <Nav items={['About me', 'Resume', 'Portfolio', 'Contact']} />
        <ThemeToggle />
      </Container>
    </header>
  );
};
