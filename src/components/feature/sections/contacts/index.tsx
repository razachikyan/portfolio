import { Image } from "../../../shared/image";
import { Container } from "../../../container";
import { Box } from "../../box";
import { SectionTitle } from "../../sectionTitle";

import styles from "./styles.module.css";
import { MailMe } from "../../mailMe";

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <div className={styles.content}>
          <div className={styles.social}>
            <Box className={styles.item}>
              <a href="https://t.me/Achikyann">
                <Image src="/icons/telegram.svg" alt="telegram" size={60} />
                <span>@Achikyann</span>
              </a>
            </Box>
            <Box className={styles.item}>
              <a href="https://github.com/razachikyan/">
                <Image src="/icons/github-black.svg" alt="git" size={60} />
                <span>@razachikyan</span>
              </a>
            </Box>
            <Box className={styles.item}>
              <a href="https://www.linkedin.com/in/razmik-achikyan/">
                <Image src="/icons/linkedin.svg" alt="git" size={60} />
                <span>Razmik Achikyan</span>
              </a>
            </Box>
            <Box className={styles.item}>
              <a href="https://discord.com/users/raz1425">
                <Image src="/icons/discord.svg" alt="git" size={60} />
                <span>@raz01425</span>
              </a>
            </Box>
          </div>
          <MailMe />
        </div>
      </Container>
    </section>
  );
};
