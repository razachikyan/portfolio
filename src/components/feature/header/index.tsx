import { useMediaQuery } from "react-responsive";
import { ThemeToggle } from "../themeToggle";
import { Container } from "../container";
import { Logo } from "../Logo";
import { Nav } from "../nav";

import styles from "./styles.module.css";

export const Header = (): JSX.Element => {
  const isTab = useMediaQuery({ maxWidth: 1200 });

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.left}>
          <Nav
            className={styles.nav}
            itemClassName={styles.item}
            items={[
              { name: "About me", link: "/#about" },
              { name: "Experience", link: "/#experience" },
              { name: "Education", link: "/#education" },
              { name: "Resume", link: "resume" },
              { name: "Contact", link: "/contacts" },
              { name: "Portfolio", link: "/" },
            ]}
            direction={isTab ? "column" : "row"}
          />
          {!isTab && <ThemeToggle />}
        </div>
      </Container>
    </header>
  );
};
