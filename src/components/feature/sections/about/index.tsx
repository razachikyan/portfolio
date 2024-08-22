import { Container } from "@/components/container";
import { Image } from "@/components/shared/image";

import styles from "./styles.module.css";

export const Promo = (): JSX.Element => {
  return (
    <section className={styles.promo}>
      <Container className={styles.container}>
        <Image src="" alt="ava" className={styles.avatar} />
        <div className={styles.info}>
          <span>Software Developer</span>
          <h2>Razmik Achikyan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            dignissimos debitis saepe quod consequuntur veritatis sapiente
            voluptatum suscipit? Dolorem, distinctio officiis! Tenetur
            laudantium ipsum illum nesciunt tempore unde dolorem sint.
          </p>
          <a className={styles.cvDowload} download="./styles.module.css">
            Download CV
          </a>
        </div>
      </Container>
    </section>
  );
};
