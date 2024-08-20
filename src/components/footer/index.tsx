import styles from "./styles.module.css";
import { IFooterProps } from "./types";

export const Footer = ({}: IFooterProps): JSX.Element => {
  return <footer className={styles.footer}></footer>;
};
