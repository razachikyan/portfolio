import styles from "./styles.module.css";
import { IHeaderProps } from "./types";

export const Header = ({}: IHeaderProps): JSX.Element => {
  return <header className={styles.header}></header>;
};
