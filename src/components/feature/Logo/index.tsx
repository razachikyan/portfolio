import { useTheme } from "../../../contexts/ThemeContext";
import { Image } from "../../shared/image";

import styles from "./styles.module.css";

export const Logo = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <div className={styles.logo}>
      <Image
        size={44}
        className={styles.image}
        src={`/icons/logo-${theme}.svg`}
        alt="logo"
      />

      <h1 className={styles.name}>Razmik Achikyan</h1>
    </div>
  );
};
