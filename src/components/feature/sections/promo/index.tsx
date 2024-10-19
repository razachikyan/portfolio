import classNames from "classnames";
import { Container } from "../../container";
import { Image } from "../../../../components/shared/image";
import { TypeAnimation } from "react-type-animation";

import styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";

export const Promo = (): JSX.Element => {
  const isMobile = useMediaQuery({maxWidth: 680})
  const isSmall = useMediaQuery({maxWidth: 375})

  return (
    <section className={styles.promo}>
      <Container className={styles.container}>
        <div className={styles.box}>
          <Image
            size={isSmall ? 250 : isMobile ? 300 : 400}
            src="/images/Razmik.jpg"
            alt="ava"
            className={styles.avatar}
          />
          <div className={styles.info}>
            <span className={styles.subtitle}>Software Developer</span>
            <h2 className={styles.name}>Razmik Achikyan</h2>
            <TypeAnimation
              sequence={[
                `👋 Hi, I'm Razmik, a frontend developer with experience in
              backend and mobile app development. I specialize in creating
              seamless web interfaces using React and Next.js. Let's
              connect! 🤝`,
              ]}
              wrapper="p"
              cursor={true}
              className={styles.descr}
            />
            <div className={styles.btnBox}>
              <a
                className={classNames(styles.button, styles.cv)}
                href={"/pdf/Razmik-Achikyan.pdf"}
                download
              >
                Download CV
              </a>
              <a
                className={classNames(styles.button, styles.contacts)}
                href="/contacts"
              >
                Contacts
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
