import { Image } from "../../shared/image";

import styles from "./styles.module.css";

export const Logo = (): JSX.Element => {
  return (
    <div className={styles.logo}>
      <Image size={44} className={styles.image} src="/icons/logo-light.svg" alt="logo" />
      <h1>Razmik Achikyan</h1>
    </div>
  );
};
